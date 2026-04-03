import { test, expect } from './fixtures/page-fixtures';

test.describe('Login Page', () => {
  test('email and password fields are present', async ({ loginPage }) => {
    await expect(loginPage.emailInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
  });

  test('Log In button is disabled when fields are empty', async ({ loginPage }) => {
    await expect(loginPage.loginButton).toBeVisible();
    await expect(loginPage.loginButton).toBeDisabled();
  });

  test('Forgot Password link', async ({ loginPage }) => {
    await expect(loginPage.forgotPasswordLink).toBeVisible();
    await expect(loginPage.forgotPasswordLink).toHaveAttribute('href', '/forgot-password');
  });

  test('sign up prompt for new users', async ({ loginPage }) => {
    await expect(loginPage.signUpLink).toBeVisible();
    await expect(loginPage.signUpLink).toContainText('Sign up');
  });

  test('hero section shows platform tagline', async ({ loginPage }) => {
    await expect(loginPage.heroHeading).toBeVisible();
    await expect(loginPage.heroSubtext).toBeVisible();
  });

  test('logo links to mb.io homepage', async ({ loginPage }) => {
    await expect(loginPage.logo).toBeVisible();
    await expect(loginPage.logo).toHaveAttribute('href', 'https://mb.io/');
  });

  test('Log In button enables after filling credentials', async ({ loginPage }) => {
    await expect(loginPage.loginButton).toBeDisabled();
    await loginPage.fillCredentials('test@example.com', 'SomePassword1');
    await expect(loginPage.loginButton).toBeEnabled();
  });

  test('Forgot Password navigates to reset page', async ({ loginPage }) => {
    await loginPage.forgotPasswordLink.click();
    await expect(loginPage.page).toHaveURL(/forgot-password/);
  });

  test('invalid credentials show error message', async ({ loginPage }) => {
    await loginPage.fillCredentials('fake@test.com', 'WrongPass123');
    await loginPage.loginButton.click();
    await expect(loginPage.errorMessage).toBeVisible();
  });
});
