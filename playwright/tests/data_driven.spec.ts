import { test } from '@playwright/test';
import { SwagShopLogin } from '../pages/login-page';
import { CheckItemPrice } from '../pages/checkItemPrice-page';
import items from '../data/itemsWithPrices.json';

test.beforeEach(async ({ page }) => {
  const swagShopLogin = new SwagShopLogin(page);
  await swagShopLogin.goto();
  await swagShopLogin.loginUser('standard_user', 'secret_sauce');
});

test('Check price for a backpack', async ({ page }) => {
  const checkItemPrice = new CheckItemPrice(page);

  await checkItemPrice.checkItemPrice(items[0].name, items[0].price);

  //await page.pause();
});

items.forEach((item) => {
  test(`Check prices for swag ${item.name}`, async ({ page }) => {
    const checkItemPrice = new CheckItemPrice(page);

    await checkItemPrice.checkItemPrice(item.name, item.price);

    //await page.pause();
  });
});
