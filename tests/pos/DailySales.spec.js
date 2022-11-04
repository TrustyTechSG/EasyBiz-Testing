import { test, expect } from '@playwright/test';
import clockIn from './clockIn';

test.beforeEach(clockIn);

test('Daily Sales', async ({ page }) => {

  await page.locator('div:nth-child(3) > div:nth-child(2) > div:nth-child(3) > .ant-btn').click();

  await expect (page.locator('text=Daily Sales')).toBeEnabled();
// check daily sales prompt
  await page.locator('text=Sales >> nth=1').click();

  await expect(page.locator('text=2022 Sales')).toBeEnabled();

  await page.locator('[aria-label="Close"]').nth(1).click();
// check daily income prompt
  await page.locator('text=Income').click();

  await expect(page.locator('text=2022 Income')).toBeEnabled();

  await page.locator('[aria-label="Close"]').nth(2).click();
// check close of the day prompt
  await page.locator('button:has-text("Close of day")').click();

  await expect (page.locator('text=Close of Day Report')).toBeEnabled();

});
