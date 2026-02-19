# Cypress Test Automation Project

Automated testing suite for TestProAI website using Cypress.

## Prerequisites

- Node.js (v14 or higher)
- npm

## Installation

```bash
npm install
```

## Project Structure

```
export/
├── cypress/
│   ├── e2e/              # Test files
│   │   ├── contact.cy.js
│   │   └── homepage.cy.js
│   ├── fixtures/         # Test data
│   │   └── users.json
│   ├── pages/            # Page Object Models
│   │   ├── contactPage.js
│   │   └── homePage.js
│   └── support/          # Custom commands
│       ├── commands.js
│       └── e2e.js
└── cypress.config.js     # Cypress configuration
```

## Running Tests

Open Cypress Test Runner:
```bash
npx cypress open
```

Run tests in headless mode:
```bash
npx cypress run
```

Run specific test file:
```bash
npx cypress run --spec "cypress/e2e/homepage.cy.js"
```

## Test Coverage

### Homepage Tests
- Form visibility validation
- Form fields presence check
- Course dropdown options verification
- Form submission with valid data
- Required field validation

### Contact Page Tests
- Header navigation verification
- Contact form testing

## Configuration

Base URL: `https://www.testproai.com/`
- Viewport: 1920x1080

## Test Data

Test data for multiple users is available in `cypress/fixtures/users.json`
