import { expect, Locator, Page } from '@playwright/test';

export class CheckItemPrice {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async checkItemPrice(itemName: string, price: string) {
    const testItem = this.page
      .locator('.inventory_item')
      .filter({ hasText: itemName })
      .first()
      .locator('.inventory_item_price');
    await expect(testItem).toContainText(price);
  }
}
