import { test as base } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';
import { HomePage } from '../../src/pages/HomePage';
import { CompanyPage } from '../../src/pages/CompanyPage';
import { NavigationComponent } from '../../src/components/NavigationComponent';
import { TradingSection } from '../../src/components/TradingSection';
import { FooterComponent } from '../../src/components/FooterComponent';

type PageFixtures = {
  loginPage: LoginPage;
  homePage: HomePage;
  companyPage: CompanyPage;
  nav: NavigationComponent;
  trading: TradingSection;
  footer: FooterComponent;
};

export const test = base.extend<PageFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await use(loginPage);
  },

  homePage: async ({ page }, use) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.navigateToHome();
    await use(new HomePage(page));
  },

  companyPage: async ({ page }, use) => {
    await use(new CompanyPage(page));
  },

  nav: async ({ page }, use) => {
    await use(new NavigationComponent(page));
  },

  trading: async ({ page }, use) => {
    await use(new TradingSection(page));
  },

  footer: async ({ page }, use) => {
    await use(new FooterComponent(page));
  },
});

export { expect } from '@playwright/test';
