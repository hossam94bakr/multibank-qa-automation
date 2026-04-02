import { type Locator, type Page } from '@playwright/test';

export class NavigationComponent {
  readonly page: Page;
  readonly mainNav: Locator;
  readonly exploreLink: Locator;
  readonly featuresLink: Locator;
  readonly companyLink: Locator;
  readonly signInLink: Locator;
  readonly signUpLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.mainNav = page.getByRole('navigation', { name: 'Main' });
    this.exploreLink = this.mainNav.getByRole('link', { name: 'Explore' });
    this.featuresLink = this.mainNav.getByRole('link', { name: 'Features' });
    this.companyLink = this.mainNav.getByRole('link', { name: 'Company' });
    this.signInLink = page.getByRole('link', { name: 'Sign in' });
    this.signUpLink = page.getByRole('link', { name: 'Sign up' });
  }
}
