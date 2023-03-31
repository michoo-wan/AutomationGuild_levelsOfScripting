import { test, expect } from '@playwright/test';

test('Check price for a backpack', async ({ page }) => {
  await page.goto('/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page).toHaveURL(/inventory/);

  const testItem = page
    .locator('.inventory_item')
    .filter({ hasText: 'Sauce Labs Backpack' })
    .first()
    .locator('.inventory_item_price');
  await expect(testItem).toContainText('23.99');

  //await page.pause();
});
test('Check prices of all items', async ({ page }) => {
  await page.goto('/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page).toHaveURL(/inventory/);

  const backpackPrice = page
    .locator('.inventory_item')
    .filter({ hasText: 'Sauce Labs Backpack' })
    .first()
    .locator('.inventory_item_price');
  await expect(backpackPrice).toContainText('23.99');

  const bikeLightPrice = page
    .locator('.inventory_item')
    .filter({ hasText: 'Sauce Labs Bike Light' })
    .first()
    .locator('.inventory_item_price');
  await expect(bikeLightPrice).toContainText('11.99');

  const boltTshirtPrice = page
    .locator('.inventory_item')
    .filter({ hasText: 'Sauce Labs Bolt T-Shirt' })
    .first()
    .locator('.inventory_item_price');
  await expect(boltTshirtPrice).toContainText('19.99');

  const fleeceJacketPrice = page
    .locator('.inventory_item')
    .filter({ hasText: 'Sauce Labs Fleece Jacket' })
    .first()
    .locator('.inventory_item_price');
  await expect(fleeceJacketPrice).toContainText('45.99');

  const labsOnesie = page
    .locator('.inventory_item')
    .filter({ hasText: 'Sauce Labs Onesie' })
    .first()
    .locator('.inventory_item_price');
  await expect(labsOnesie).toContainText('9.99');

  const allTheThingsTshirtPrice = page
    .locator('.inventory_item')
    .filter({ hasText: 'Test.allTheThings() T-Shirt (Red)' })
    .first()
    .locator('.inventory_item_price');
  await expect(allTheThingsTshirtPrice).toContainText('18.99');

  //await page.pause();
});
