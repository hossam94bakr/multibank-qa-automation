import { test, expect } from './fixtures/page-fixtures';
import { urls, hero, homepage, footer as footerData } from './fixtures/test-data';

test.describe('Hero Section', () => {
  test('hero heading shows correct text', async ({ homePage }) => {
    await expect(homePage.heroHeading).toBeVisible();
    await expect(homePage.heroHeading).toHaveText(hero.heading);
  });

  test('hero subtext describes the platform', async ({ homePage }) => {
    await expect(homePage.heroSubtext).toBeVisible();
    await expect(homePage.heroSubtext).toContainText('Simple, secure and speedy');
  });

  test('download link points to app store', async ({ homePage }) => {
    await expect(homePage.downloadAppLink).toBeVisible();
    await expect(homePage.downloadAppLink).toHaveText('Download the app');
    await expect(homePage.downloadAppLink).toHaveAttribute('href', urls.downloadApp);
  });

  test('open account link leads to registration', async ({ homePage }) => {
    await expect(homePage.openAccountLink).toBeVisible();
    await expect(homePage.openAccountLink).toHaveText('Open an account');
    await expect(homePage.openAccountLink).toHaveAttribute('href', urls.signUp);
  });
});

test.describe('Homepage Sections', () => {
  test('portfolio section heading is visible', async ({ homePage }) => {
    await expect(homePage.portfolioHeading).toBeVisible();
    await expect(homePage.portfolioHeading).toHaveText(homepage.portfolioHeading);
  });

  test('features section heading is visible', async ({ homePage }) => {
    await expect(homePage.featuresHeading).toBeVisible();
    await expect(homePage.featuresHeading).toHaveText(homepage.featuresHeading);
  });
});

test.describe('Marketing Banners', () => {
  test('promotional banner is visible on the homepage', async ({ homePage }) => {
    await expect(homePage.promoHeading).toBeVisible();
    await expect(homePage.promoHeading).toHaveText('Unblemished. Unstoppable. United.');
  });

  test('payment information section is visible', async ({ homePage }) => {
    await expect(homePage.paymentInfoHeading).toBeVisible();
    await expect(homePage.paymentInfoHeading).toContainText('fastest way to trade');
  });
});

test.describe('Accessibility', () => {
  test('all images have alt text', async ({ homePage }) => {
    const images = homePage.page.locator('img:visible');
    const count = await images.count();
    for (let i = 0; i < count; i++) {
      const alt = await images.nth(i).getAttribute('alt');
      expect(alt, `Image ${i} is missing alt text`).toBeTruthy();
    }
  });

  test('page has a navigation landmark', async ({ homePage, nav }) => {
    await expect(nav.mainNav).toBeVisible();
  });

  test('page has a banner landmark', async ({ homePage }) => {
    await expect(homePage.page.locator('header, [role="banner"]').first()).toBeVisible();
  });

  test('page has a contentinfo landmark (footer)', async ({ homePage, footer }) => {
    await expect(footer.footer).toBeVisible();
  });
});

test.describe('Footer', () => {
  test('footer is present', async ({ homePage, footer }) => {
    await expect(footer.footer).toBeVisible();
    await expect(footer.footerNav).toBeVisible();
  });

  for (const section of footerData.sections) {
    test(`footer displays "${section}" section heading`, async ({ homePage, footer }) => {
      await expect(footer.sectionHeading(section)).toBeVisible();
      await expect(footer.sectionHeading(section)).toHaveText(section);
    });
  }

  test('Legal section contains all expected links', async ({ homePage, footer }) => {
    const legalLinks = footer.sectionLinks('Legal');
    await expect(legalLinks).toHaveCount(footerData.legalLinks.length);
    for (const linkText of footerData.legalLinks) {
      await expect(legalLinks.filter({ hasText: linkText })).toBeVisible();
    }
  });

  test('Support section contains expected links', async ({ homePage, footer }) => {
    const supportLinks = footer.sectionLinks('Support');
    await expect(supportLinks).toHaveCount(footerData.supportLinks.length);
    for (const linkText of footerData.supportLinks) {
      await expect(supportLinks.filter({ hasText: linkText })).toBeVisible();
    }
  });

  test('copyright includes current year', async ({ homePage, footer }) => {
    await expect(footer.copyrightText).toBeVisible();
    await expect(footer.copyrightText).toContainText(new Date().getFullYear().toString());
  });

  test('payment method logos are shown', async ({ homePage, footer }) => {
    await expect(footer.paymentLogosContainer).toBeVisible();
  });

  for (const method of footerData.paymentMethods) {
    test(`footer shows ${method} payment logo`, async ({ homePage, footer }) => {
      await expect(footer.paymentLogo(method)).toBeVisible();
    });
  }
});
