import { type Locator, type Page } from '@playwright/test';

export class TradingSection {
  readonly page: Page;
  readonly sectionHeading: Locator;
  readonly exploreAllLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.sectionHeading = page.getByRole('heading', { name: 'Catch your next trade' });
    this.exploreAllLink = page.getByRole('link', { name: 'Explore all assets' });
  }

  async scrollIntoView(): Promise<void> {
    await this.sectionHeading.scrollIntoViewIfNeeded();
  }

  categoryHeading(title: string): Locator {
    return this.page.getByRole('heading', { name: title, exact: true });
  }

  categoryCard(title: string): Locator {
    return this.page
      .locator('div')
      .filter({ has: this.page.getByRole('heading', { name: title, exact: true }) })
      .filter({ hasNot: this.page.getByRole('heading', { name: 'Catch your next trade' }) });
  }

  assetRows(title: string): Locator {
    return this.categoryCard(title).getByRole('link');
  }
}
