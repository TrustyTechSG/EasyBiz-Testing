import { test, expect } from '@playwright/test';
import clockIn from './clockIn';

test.beforeEach(clockIn);

test('Copy order', async ({ page }) => {

  
  await page.locator('div:nth-child(2) > div:nth-child(2) > .ant-btn').click();

  await page.locator('div[role="tab"]:has-text("Quick Search")').click();

    await page.locator('div[role="tabpanel"] button:has-text("0")').click();
    await page.locator('div[role="tabpanel"] button:has-text("2")').click();
    await page.locator('div[role="tabpanel"] button:has-text("1")').click();
    await page.locator('button:has-text("7")').click();
    await page.locator('div[role="tabpanel"] button:has-text("2")').click();

    await page.locator('button:has-text("Find")').click();

    await expect(page.locator('text=#02172 (POINT)')).toBeEnabled();

  await page.locator('.ant-drawer-title > .ant-space > div:nth-child(2) > .ant-btn').click();

  await expect(page.locator('text=Copy order items into new order cart?')).toBeEnabled();

  await page.locator('button:has-text("OK")').click();

  await page.locator('text=#02172 (POINT)ReceiptLabelPhotoPaymentCollectionProgressHistoryReceiptPrint(2)Em >> [aria-label="Close"]').click();

  await page.locator('[aria-label="Close"] >> nth=1').click();

  await expect (page.locator('text=#1 T-Shirt/Polo Shirtx8 pcsSGD 40.00')).toBeEnabled();


});