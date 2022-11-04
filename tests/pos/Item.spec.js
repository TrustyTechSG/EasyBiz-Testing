import { test, expect } from '@playwright/test';
import clockIn from './clockIn';

test.beforeEach(clockIn);

test('categories', async ({ page }) => {

  // Click text=TOP
  await page.locator('text=TOP').click();
  // Click text=T-Shirt/Polo Shirt
  await page.locator('text=T-Shirt/Polo Shirt').click();
  // Click strong:has-text("T-Shirt/Polo Shirt")
  await expect(page.locator('strong:has-text("T-Shirt/Polo Shirt")')).toBeEnabled();
  // Click button:has-text("Close")
  await page.locator('button:has-text("Close")').click();
  // Click text=BOTTOM
  await page.locator('text=BOTTOM').click();
  // Click text=Short Dress
  await page.locator('text=Short Dress').click();
  // Click button:has-text("Close")
  await page.locator('button:has-text("Close")').click();
  // Click text=LOAD WASH
  await page.locator('text=LOAD WASH').click();
  // Click text=Load Wash - Per Kg
  await page.locator('text=Load Wash - Per Kg').click();
  // Click text=IroningSGD 5.00Add >> button
  await page.locator('text=IroningSGD 5.00Add >> button').click();
  // Click button:has-text("5")
  await page.locator('button:has-text("5")').click();
  // Click text=Next
  await page.locator('text=Next').click();
  // Click button:has-text("5")
  await page.locator('button:has-text("5")').click();
  // Click text=Add >> nth=3
  await page.locator('text=Add').nth(3).click();
  // Click text=5(5) >> nth=0
  await expect(page.locator('text=5(5) >> nth=1')).toBeEnabled();
  // Click button:has-text("Close")
  await page.locator('button:has-text("Close")').click();
  // Click div:nth-child(2) > .ant-space > div > .ant-btn >> nth=0
  await page.locator('div:nth-child(2) > .ant-space > div > .ant-btn').first().click();
  // Fill [placeholder="Search"]
  await page.locator('[placeholder="Search"]').fill('suit');
  // Click text=Suit >> nth=1
  await page.locator('text=Suit').nth(1).click();
  // Click .flex > div:nth-child(2) > .ant-space > div:nth-child(2) > .ant-btn
  await page.locator('.flex > div:nth-child(2) > .ant-space > div:nth-child(2) > .ant-btn').click();
  // Click button:has-text("U") >> nth=0
  await page.locator('button:has-text("U")').first().click();
  // Click text=Underpants
  await page.locator('text=Underpants').click();
  // Click text=Index: UClose >> button
  await page.locator('text=Index: UClose >> button').click();
  // Click text=TOP
  await expect(page.locator('text=TOP')).toBeEnabled();







});
