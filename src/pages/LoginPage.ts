import { type Locator, type Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  readonly logo: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly forgotPasswordLink: Locator;
  readonly signUpLink: Locator;
  readonly heroHeading: Locator;
  readonly heroSubtext: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.logo = page.locator('a').filter({ has: page.locator('img[alt="Logo"]') }).first();
    this.emailInput = page.getByPlaceholder('Email address');
    this.passwordInput = page.getByPlaceholder('Password');
    this.loginButton = page.getByRole('button', { name: 'Log In' });
    this.forgotPasswordLink = page.getByRole('link', { name: 'Forgot Password?' });
    this.signUpLink = page.getByText("Don't have an account?").locator('..');
    this.heroHeading = page.getByRole('heading', { name: 'This is crypto for everyone' });
    this.heroSubtext = page.getByText('Trade with low fees on a platform you can trust.');
    this.errorMessage = page.getByRole('alert');
  }

  async goto(): Promise<void> {
    await this.page.goto('/');
  }

  async fillCredentials(email: string, password: string): Promise<void> {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
  }

  async navigateToHome(): Promise<void> {
    await this.logo.click();
    await this.page.waitForURL(/mb\.io/);
  }
}
