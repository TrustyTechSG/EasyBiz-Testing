import { test, expect } from '@playwright/test';
import clockIn from './clockIn';

test.beforeEach(clockIn);

test.describe('Cash drawer', () => {
test('cash drawer', async ({ page }) => {

  await page.locator('div:nth-child(3) > div:nth-child(2) > div:nth-child(4) > .ant-badge > .ant-btn').click();

  await expect(page.locator('text=Cash Drawer')).toBeEnabled();

  await page.locator('button:has-text("Cash in")').click();
  
  await expect(page.locator('text=Cash In').nth(2)).toBeEnabled();

  await page.locator('text=Cash InSGD 123456789.0Preview >> [aria-label="Close"]').click();

  await page.locator('button:has-text("Cash out")').click();

  await page.locator('text=Cash Out').nth(1).click();

  await page.locator('text=Cash OutSGD 123456789.0Preview >> [aria-label="Close"]').click();

  await page.locator('button:has-text("End drawer")').click();

  await expect(page.locator("text=End Drawer >> nth=1")).toBeVisible();
});

test('When Cash drawer not started', async ({ page }) => {

  

});

});
