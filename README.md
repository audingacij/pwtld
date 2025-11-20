# Playwright Test Project

This project contains automated UI tests using Playwright and Faker.

## ➡️ How to Install Dependencies

All necessary Node.js packages need to be installed using this command in the terminal:

```bash
npm install
```
## 📌 Environment Variables Usage

This project uses environment variables.
Environment variables allow you to: configure the application
without hardcoding sensitive data and keep
secrets (API keys, URLs, passwords) outside your codebase.

The test suite uses:

    process.env.APP_URL

This controls which environment your tests run against.

Playwright tests read this value during:

``` js
await page.goto(process.env.APP_URL);
```

### How to use environment variables

Create a .env file in the project and add:

```bash
APP_URL=https://fe-delivery.tallinn-learning.ee/signin
```

This is required for tests to know which URL to open.

## 🏃‍➡️ Running tests

To run all tests:

```bash
npx playwright test
```

To run tests in headed mode:

```bash
npx playwright test --headed
```

To run a specific test:

```bash
npx playwright test example.spec.ts
```

## 🎭️ Project Test Automation

This project includes a `playwright.yml` file to run tests on **push** and **pull** requests in GitHub on the `main` and `master` branches.

### Steps

1. **Installing dependencies**
2. **Installing Playwright browsers**
3. **Running tests**
