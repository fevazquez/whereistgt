<div align="center">
  <h1>whereistgt.com</h1>
  <p>
    Investing In Friendship. A commitment through The Guys Trip (TGT), a derivative of <a href="https://tgtsurf.com">the original tgtsurf.com</a>
  </p>

  [![CircleCI](https://dl.circleci.com/status-badge/img/gh/fevazquez/whereistgt/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/fevazquez/whereistgt/tree/main)
  [![Maintainability](https://api.codeclimate.com/v1/badges/0087ee8938982799d868/maintainability)](https://codeclimate.com/github/fevazquez/whereistgt/maintainability)
  [![Test Coverage](https://api.codeclimate.com/v1/badges/0087ee8938982799d868/test_coverage)](https://codeclimate.com/github/fevazquez/whereistgt/test_coverage)
</div>

<br />

<!-- Table of Contents -->

# :notebook_with_decorative_cover: Table of Contents

- [About the Project](#star2-about-the-project)
  - [Tech Stack](#space_invader-tech-stack)
- [Getting Started](#toolbox-getting-started)
  - [Run Locally](#running-run-locally)
- [Contact](#handshake-contact)

<!-- About the Project -->

## :star2: About the Project

<!-- TechStack -->

### :space_invader: Tech Stack

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://reactjs.org/">React.js</a></li>
    <li><a href="https://getbootstrap.com">Bootstrap</a></li>
  </ul>
</details>

<!-- Run Locally -->

### :running: Run Locally

Clone the project

```bash
  git clone https://github.com/fevazquez/whereistgt.git
```

Go to the project directory

```bash
  cd whereistgt
```

Install dependencies

```bash
  npm install
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
```bash
  npm start
```

### :memo: Running tests

Runs all unit tests
```bash
  npm test
```

Running selenium tests:
```bash
docker build --no-cache -t e2e-test .
docker run -p 80:80 --rm e2e-test
```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

<!-- Contact -->

## :handshake: Contact

Fernando Vazquez - f4vazquez@gmail.com

Warren Ngoun - warren.ngoun@gmail.com
