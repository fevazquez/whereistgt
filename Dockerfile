FROM ubuntu:22.04
USER root

ENV BUNDLE_SILENCE_ROOT_WARNING=1

# Install dependencies
RUN apt-get update && apt-get -y install curl gnupg unzip wget

# Install Nginx
RUN apt-get update && \
  apt-get install -y software-properties-common nginx && \
  rm -rf /var/lib/apt/lists/* && \
  chown -R www-data:www-data /var/lib/nginx

# Copy nginx config
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Set the Chrome repo
RUN mkdir -p /etc/apt/keyrings && \
  wget -qO- https://dl.google.com/linux/linux_signing_key.pub | gpg --dearmor > /etc/apt/keyrings/google-chrome.gpg && \
  echo "deb [signed-by=/etc/apt/keyrings/google-chrome.gpg] http://dl.google.com/linux/chrome/deb/ stable main" | tee /etc/apt/sources.list.d/google-chrome.list

RUN apt-get update && apt-get install -y google-chrome-stable

# Manually fetch ChromeDriver version matching installed Chrome
RUN CHROME_VERSION=$(google-chrome-stable --version | awk '{print $3}') && \
  echo "Detected Chrome version: $CHROME_VERSION" && \
  wget -q "https://chromedriver.storage.googleapis.com/$CHROME_VERSION/chromedriver_linux64.zip" -O /tmp/chromedriver.zip && \
  unzip /tmp/chromedriver.zip -d /usr/local/bin/ && \
  rm /tmp/chromedriver.zip && chmod +x /usr/local/bin/chromedriver

# Install nodejs
RUN wget -qO - https://deb.nodesource.com/setup_20.x | bash -
RUN apt-get -y install nodejs

WORKDIR /src
ADD . /src

# Build react app
RUN npm install --save
RUN npm run build
RUN cp -rf build/. /var/www/html

EXPOSE 80

# Install python3
RUN apt-get install -y python3 python3-distutils python3-apt
RUN curl -sL https://bootstrap.pypa.io/get-pip.py | python3

# Install python dependencies
RUN pip install setuptools pip --upgrade --force-reinstall
RUN pip install -r requirements.txt

CMD [ "sh", "-c", "/bin/bash ./docker-entry.sh" ]