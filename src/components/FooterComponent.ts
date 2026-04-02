import { type Locator, type Page } from '@playwright/test';

export class FooterComponent {
  readonly page: Page;
  readonly footer: Locator;
  readonly footerNav: Locator;
  readonly copyrightText: Locator;
  readonly paymentLogosContainer: Locator;

  constructor(page: Page) {
    this.page = page;
    this.footer = page.locator('footer');
    this.footerNav = this.footer.getByRole('navigation', { name: 'Footer' });
    this.copyrightText = this.footer.getByText(/copyright.*mb\.io/i);
    this.paymentLogosContainer = this.footer.getByRole('img', { name: /payment/i });
  }

  sectionHeading(name: string): Locator {
    return this.footerNav.getByRole('heading', { name, exact: true });
  }

  sectionLinks(sectionName: string): Locator {
    return this.footerNav
      .getByRole('heading', { name: sectionName, exact: true })
      .locator('..')
      .getByRole('link');
  }

  paymentLogo(name: string): Locator {
    return this.paymentLogosContainer.getByRole('img', { name });
  }
}
