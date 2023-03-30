import { Given, Then } from '@cucumber/cucumber';
import { page } from '../steps/world';
import { expect } from '@playwright/test';

Given('I am on main swag shop page', async () => {
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page).toHaveURL(/inventory/);
});

Then('Backpack price is {string}', async (string) => {
  const testItem = page
    .locator('.inventory_item')
    .filter({ hasText: 'Sauce Labs Backpack' })
    .first()
    .locator('.inventory_item_price');
  await expect(testItem).toContainText(string);
});

Then(
  'I see {string} in price {string} on the page',
  async (string1, string2) => {
    const testItem = page
      .locator('.inventory_item')
      .filter({ hasText: string1 })
      .first()
      .locator('.inventory_item_price');
    await expect(testItem).toContainText(string2);
  }
);
