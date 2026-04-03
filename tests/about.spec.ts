import { test, expect } from './fixtures/page-fixtures';
import { companyPage as companyData } from './fixtures/test-data';

test.describe('About / Company Page', () => {
  test('Company link navigates to the company page', async ({ homePage, nav, page }) => {
    await nav.companyLink.click();
    await expect(page).toHaveURL(companyData.urlPattern);
  });

  test('main heading says "Why MultiBank Group?"', async ({ homePage, nav, companyPage, page }) => {
    await nav.companyLink.click();
    await expect(page).toHaveURL(companyData.urlPattern);
    await expect(companyPage.mainHeading).toBeVisible();
    await expect(companyPage.mainHeading).toHaveText(companyData.heading);
  });

  test('subtitle mentions MultiBank', async ({ homePage, nav, companyPage, page }) => {
    await nav.companyLink.click();
    await expect(page).toHaveURL(companyData.urlPattern);
    await expect(companyPage.subtitle).toBeVisible();
    await expect(companyPage.subtitle).toContainText('MultiBank');
  });

  test('shows key stats — turnover, customers, offices', async ({ homePage, nav, companyPage, page }) => {
    await nav.companyLink.click();
    await expect(page).toHaveURL(companyData.urlPattern);
    await expect(companyPage.annualTurnover).toBeVisible();
    await expect(companyPage.customersWorldwide).toBeVisible();
    await expect(companyPage.globalOffices).toBeVisible();
  });

  test('content sections are rendered', async ({ homePage, nav, companyPage, page }) => {
    await nav.companyLink.click();
    await expect(page).toHaveURL(companyData.urlPattern);
    await expect(companyPage.leadershipHeading).toBeVisible();
    await expect(companyPage.innovationHeading).toBeVisible();
    await expect(companyPage.integrityHeading).toBeVisible();
  });

  test('strength section heading', async ({ homePage, nav, companyPage, page }) => {
    await nav.companyLink.click();
    await expect(page).toHaveURL(companyData.urlPattern);
    await expect(companyPage.strengthHeading).toBeVisible();
  });

  test('community & media section', async ({ homePage, nav, companyPage, page }) => {
    await nav.companyLink.click();
    await expect(page).toHaveURL(companyData.urlPattern);
    await expect(companyPage.communityHeading).toBeVisible();
  });

  test('get in touch link points to contact page', async ({ homePage, nav, companyPage, page }) => {
    await nav.companyLink.click();
    await expect(page).toHaveURL(companyData.urlPattern);
    await expect(companyPage.getInTouchLink).toBeVisible();
    await expect(companyPage.getInTouchLink).toHaveAttribute('href', /contact/);
  });
});
