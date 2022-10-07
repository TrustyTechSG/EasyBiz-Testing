import { expect, test } from '@playwright/test';
import clockIn from './clockIn';
import selectCustomer from './selectCustomer';

const CASES = [
  { search: '90999564', payment: 'CASH' },
  { search: '90999564', payment: 'PAYNOW' },
  { search: '90999564', payment: 'CARDS' },
  { search: '90999564', payment: 'Unpaid' },
];

test.describe('Create order', () => {
  test.beforeEach(clockIn);

  for (const { search, payment } of CASES) {
    test(`${search} - ${payment}`, async ({ page }) => {
      await selectCustomer(page, search);

      // Click button:has-text("Payment")
      await page.locator('button:has-text("Payment")').click();

      await page.locator(`button:has-text("${payment}")`).click();

      await page.locator('button:has-text("Create order")').click();

      // Click div[role="dialog"] div[role="separator"] >> text=Receipt
      await expect(page.locator('div[role="dialog"] div[role="separator"] >> text=Receipt')).toBeEnabled();

      // Click [aria-label="Close"]
      await page.locator('[aria-label="Close"]').click();
    })
  }
});