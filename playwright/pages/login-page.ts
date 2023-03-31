import { expect, Locator, Page } from '@playwright/test';

export class SwagShopLogin {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.locator('[data-test="username"]');
    this.password = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
  }
  async goto() {
    await this.page.goto('/');
  }
  async loginUser(user: string, password: string) {
    await this.username.fill(user);
    await this.password.fill(password);
    await this.loginButton.click();
    await expect(this.page).toHaveURL(/inventory/);
  }
}
