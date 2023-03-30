import { test } from '@playwright/test';
import { SwagShopLogin } from '../pages/login-page';
import { CheckItemPrice } from '../pages/checkItemPrice-page';

test('Check price for a backpack', async ({ page }) => {
  const swagShopLogin = new SwagShopLogin(page);
  const checkItemPrice = new CheckItemPrice(page);

  await swagShopLogin.goto();
  await swagShopLogin.loginUser('standard_user', 'secret_sauce');

  await checkItemPrice.checkItemPrice('Sauce Labs Backpack', '23.99');

  //await page.pause();
});

test('Check prices for all swag', async ({ page }) => {
  const swagShopLogin = new SwagShopLogin(page);
  const checkItemPrice = new CheckItemPrice(page);

  await swagShopLogin.goto();
  await swagShopLogin.loginUser('standard_user', 'secret_sauce');

  await checkItemPrice.checkItemPrice('Sauce Labs Backpack', '23.99');
  await checkItemPrice.checkItemPrice('Sauce Labs Bike Light', '11.99');
  await checkItemPrice.checkItemPrice('Sauce Labs Bolt T-Shirt', '19.99');
  await checkItemPrice.checkItemPrice('Sauce Labs Fleece Jacket', '45.99');
  await checkItemPrice.checkItemPrice('Sauce Labs Onesie', '9.99');
  await checkItemPrice.checkItemPrice(
    'Test.allTheThings() T-Shirt (Red)',
    '18.99'
  );

  //await page.pause();
});
