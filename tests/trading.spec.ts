import { test, expect } from './fixtures/page-fixtures';
import { tradingCategories } from './fixtures/test-data';

test.describe('Trading Functionality', () => {
  test('trading section heading', async ({ homePage, trading }) => {
    await trading.scrollIntoView();
    await expect(trading.sectionHeading).toBeVisible();
    await expect(trading.sectionHeading).toHaveText('Catch your next trade');
  });

  test('explore all assets link', async ({ homePage, trading }) => {
    await trading.scrollIntoView();
    await expect(trading.exploreAllLink).toBeVisible();
    await expect(trading.exploreAllLink).toHaveAttribute('href', /\/explore/);
  });

  for (const category of tradingCategories) {
    test(`"${category}" category heading is visible`, async ({ homePage, trading }) => {
      await trading.scrollIntoView();
      await expect(trading.categoryHeading(category)).toBeVisible();
      await expect(trading.categoryHeading(category)).toHaveText(category);
    });

    test(`"${category}" displays at least one trading pair`, async ({ homePage, trading }) => {
      await trading.scrollIntoView();
      const rows = trading.assetRows(category);
      await expect(rows.first()).toBeVisible();
      expect(await rows.count()).toBeGreaterThan(0);
    });

    test(`"${category}" trading pairs display asset icon and price`, async ({ homePage, trading }) => {
      await trading.scrollIntoView();
      const firstRow = trading.assetRows(category).first();
      await expect(firstRow).toBeVisible();
      await expect(firstRow.locator('img').first()).toBeVisible();
      await expect(firstRow.getByText(/\$/)).toBeVisible();
    });
  }
});
