 <h1>WebdriverIO framework</h1>

## ⚡️ Object for testing

Web site - [conduit](https://conduit.realworld.how/)

## 📦 Setup

1. Install [node.js](https://nodejs.org/en/) - JavaScript runtime environment
2. Make sure Java version 8 or above installed, and its directory is specified in the JAVA_HOME environment variable for Allure Report
3. Clone git repository

```
git clone https://github.com/AlexStoskyi/wdioHomeT/tree/main
```

4. Install project dependencies specified in the package.json `npm install`

## ⚙️ Running Tests

Run tests chrome:

```
npm run test:chrome
```

Run tests firefox:

```
npm run test:firefox

```

Run single settings test

```

npm run test:settings

```

Run single singIn test

```

npm run test:singin

```

Run single singUp test

```
npm run test:singup

```

Run single article test

```
npm run test:article

```

## Allure Report

For reporting used Allure Report - Automation Test Reporting Tool  
Learn more about Allure Report at [Allure](https://allurereport.org/)

To generate allure report:

```
npm run allure:generateReport
```

To open allure report:

```
npm run allure:openReport
```

## Report on CI

## Run tests using Docker

1. Learn more about Docker tool at [Docker](https://www.docker.com/)
2. Install [Docker Desktop](https://docs.docker.com/get-docker/)
3. Run Docker Desktop

To generate Docker image:

```
npm run docker:build
```

Run test in Docker container:

```
npm run docker:run
```
