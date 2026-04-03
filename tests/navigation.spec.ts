import { test, expect } from './fixtures/page-fixtures';
import { urls, navigation as navData } from './fixtures/test-data';

test.describe('Navigation & Layout', () => {
  test('main nav is visible', async ({ homePage, nav }) => {
    await expect(nav.mainNav).toBeVisible();
  });

  for (const item of navData.mainNavItems) {
    test(`"${item}" link is visible in main navigation`, async ({ homePage, nav }) => {
      const link = nav.mainNav.getByRole('link', { name: item });
      await expect(link).toBeVisible();
      await expect(link).toHaveText(item);
    });
  }

  test('auth links are visible', async ({ homePage, nav }) => {
    await expect(nav.signInLink).toBeVisible();
    await expect(nav.signInLink).toHaveText('Sign in');
    await expect(nav.signUpLink).toBeVisible();
    await expect(nav.signUpLink).toHaveText('Sign up');
  });

  for (const dest of navData.navDestinations) {
    test(`"${dest.name}" link navigates to ${dest.name.toLowerCase()} page`, async ({ homePage, nav, page }) => {
      const link = nav.mainNav.getByRole('link', { name: dest.name });
      await link.click();
      await expect(page).toHaveURL(dest.urlPattern);
    });
  }

  test('Sign in href points to login', async ({ homePage, nav }) => {
    await expect(nav.signInLink).toHaveAttribute('href', urls.signIn);
  });

  test('Sign up href points to registration', async ({ homePage, nav }) => {
    await expect(nav.signUpLink).toHaveAttribute('href', urls.signUp);
  });
});
