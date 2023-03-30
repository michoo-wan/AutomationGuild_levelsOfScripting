import { After, Before, setDefaultTimeout } from '@cucumber/cucumber';
import { Browser, chromium, Page } from 'playwright';

let page: Page;
let browser: Browser;

setDefaultTimeout(30000);

Before(async () => {
  try {
    browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto('http://localhost:3000');
    console.log(`captured site title as ${await page.title()}`);
  } catch (error) {
    console.log(`navigation to demo site failed due to ${error}`);
    throw new Error(`navigation to demo site failed due to ${error}`);
  }
  return page;
});

After(async () => {
  await browser.close();
});
export { page, browser };
