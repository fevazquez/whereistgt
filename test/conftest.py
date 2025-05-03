import pytest
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

def pytest_addoption(parser):
    parser.addoption("--url", action="store", default="http://localhost", help="url")

@pytest.fixture(scope="module", autouse=True)
def browser():
    options = Options()
    options.add_argument('--headless')
    options.add_argument('--no-sandbox')
    options.add_argument('--single-process')
    options.add_argument('--disable-dev-shm-usage')

    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)
    yield driver  # This will allow the browser instance to persist for multiple tests
    driver.quit()  # Ensure the browser is closed after all tests 

@pytest.fixture(scope="module")
def url(request):
    return request.config.getoption("--url")