import { type Locator, type Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly heroHeading: Locator;
  readonly heroSubtext: Locator;
  readonly downloadAppLink: Locator;
  readonly openAccountLink: Locator;
  readonly portfolioHeading: Locator;
  readonly featuresHeading: Locator;
  readonly promoHeading: Locator;
  readonly paymentInfoHeading: Locator;

  constructor(page: Page) {
    super(page);
    this.heroHeading = page.getByRole('heading', { name: 'Crypto for everyone' });
    this.heroSubtext = page.getByText('Simple, secure and speedy', { exact: false });
    this.downloadAppLink = page.getByRole('link', { name: 'Download the app' });
    this.openAccountLink = page.getByRole('link', { name: 'Open an account' });
    this.portfolioHeading = page.getByRole('heading', { name: 'Securely build your portfolio' });
    this.featuresHeading = page.getByRole('heading', { name: 'Smarter ways to trade and grow' });
    this.promoHeading = page.getByRole('heading', { name: 'Unblemished. Unstoppable. United.' });
    this.paymentInfoHeading = page.getByText('The fastest way to trade');
  }
}
