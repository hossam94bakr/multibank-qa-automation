# MultiBank QA Automation Framework

Playwright + TypeScript automation framework for [mb.io](https://mb.io) crypto trading platform.

## Architecture

```
src/
  pages/
    BasePage.ts              # Abstract base — shared page dependency
    LoginPage.ts             # Login page (trade.multibank.io)
    HomePage.ts              # Marketing homepage (mb.io/en-AE)
    CompanyPage.ts           # Company / About page
  components/
    NavigationComponent.ts   # Main nav bar, reused across pages
    TradingSection.ts        # Trading categories + scroll handling
    FooterComponent.ts       # Footer links, payment logos
tests/
  fixtures/
    page-fixtures.ts         # Custom Playwright fixtures (test.extend)
    test-data.ts             # Centralized expected values
  navigation.spec.ts
  trading.spec.ts
  content.spec.ts
  about.spec.ts
task2/
  char-frequency.ts          # Task 2: String character frequency
  char-frequency.test.ts
  README.md
```

## Design

- **POM with BasePage + Components** — pages own locators for full-page contexts, components (nav, footer, trading) are reusable across pages
- **Custom fixtures** — `test.extend()` injects pre-initialized page objects; no duplicated `beforeEach` setup
- **LoginPage / HomePage separation** — `trade.multibank.io` and `mb.io` are different apps, so they get separate page objects
- **Centralized test data** — expected values live in `test-data.ts`, tests use data-driven patterns instead of hardcoding
- **User-facing locators** — `getByRole`, `getByText` over CSS selectors that break on deploys
- **Scroll handling** — trading section uses scroll animations (`opacity: 0`), so `scrollIntoViewIfNeeded()` triggers it before asserting

## Assumptions

- Site uses a universal smart link (`mbio.go.link`) — not separate App Store / Google Play links
- Login/registration live on `trade.mb.io` — tests validate hrefs, not auth flows
- Trading pair prices are dynamic — tests check structure (icon + price), not specific values
- Whitespace excluded in Task 2, consistent with the given example

## Setup

```bash
npm install
npx playwright install
```

## Running Tests

```bash
# All browsers
npm test

# Single browser
npm run test:chromium
npm run test:firefox
npm run test:webkit

# Headed mode
npm run test:headed

# With trace capture
npx playwright test --project=chromium --trace on

# Task 2
npx tsx task2/char-frequency.ts "hello world"
npx tsx task2/char-frequency.test.ts
```

## Reports

```bash
# Playwright HTML report
npm run test:report

# Allure report (advanced analytics)
npm run test:allure
npm run test:allure:open
```

## Cross-Browser

Tests run on Chromium, Firefox, and WebKit via Playwright projects. See `playwright.config.ts` for device profiles.

## Cloud / Grid Execution

Set `BROWSER_WS_ENDPOINT` to run against BrowserStack, Sauce Labs, or a self-hosted grid:

```bash
BROWSER_WS_ENDPOINT="wss://cdp.browserstack.com/playwright?caps=..." npm test
```

## CI

GitHub Actions runs all tests on push/PR. Reports uploaded as artifacts (14-day retention). See `.github/workflows/playwright.yml`.
