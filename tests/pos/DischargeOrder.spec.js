import { test, expect } from '@playwright/test';
import clockIn from './clockIn';

test.beforeEach(clockIn);

test('test', async ({ page }) => {


  await page.locator('div:nth-child(2) > div:nth-child(2) > .ant-btn').click();

  await page.locator('div[role="tab"]:has-text("Quick Search")').click();

  await page.locator('div[role="tabpanel"] button:has-text("0")').click();
  await page.locator('div[role="tabpanel"] button:has-text("2")').click();
  await page.locator('div[role="tabpanel"] button:has-text("0")').click();
  await page.locator('div[role="tabpanel"] button:has-text("3")').click();
  await page.locator('button:has-text("8")').click();

  await page.locator('button:has-text("Find")').click();

  await page.locator('text=#02038').click();



  await page.locator('button:has-text("Collection")').click();

  await page.locator('button:has-text("#4")').click();

  await page.locator('text=Discharge >> nth=1').click();

  await expect(page.locator('text=Discharge Order #02038')).toBeEnabled();

  await page.locator('button:has-text("OK")').click();

  await expect (page.locator('span:has-text("Collection Receipt")')).toBeEnabled();



});
