import { test, expect } from '@playwright/test';
import clockIn from './clockIn';

test.beforeEach(clockIn);

test('Daily Sales', async ({ page }) => {

  await page.locator('div:nth-child(3) > div:nth-child(2) > div:nth-child(3) > .ant-btn').click();

  await expect (page.locator('text=Daily Sales')).toBeEnabled();

  await page.locator('button:has-text("Close of day")').click();

  await expect (page.locator('text=Close of Day Report')).toBeEnabled();

});
