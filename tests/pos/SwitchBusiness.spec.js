import { test, expect } from '@playwright/test';
import clockIn from './clockIn';

test.beforeEach(clockIn);

test('Switch Business', async ({ page }) => {

  expect(page.locator('text=TOP')).toBeEnabled();

  await page.locator('div:nth-child(3) > .ant-btn').first().click();

  await page.locator('h4:has-text("Alteration")').click();

  await page.locator('text=T-Shirt').click();

  await expect (page.locator('text=Add New T-Shirt')).toBeEnabled();
});
