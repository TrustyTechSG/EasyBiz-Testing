import { expect, test } from '@playwright/test';
import clockIn from './clockIn';
import selectCustomer from './selectCustomer';

test.describe.configure({ mode: 'parallel' });

const CASES = [
  { search: '7193', payment: 'CASH' },
  { search: '7193', payment: 'PAYNOW' },
  { search: '7193', payment: 'CARDS', ref: 'test' },
  { search: '7193', payment: 'Unpaid' },
];

test.describe('Create order', () => {
  test.beforeEach(clockIn);

  for (const { search, payment, ref } of CASES) {
    test(`${search} - ${payment}`, async ({ page }) => {
      await selectCustomer(page, search);

      // Click button:has-text("Payment")
      await page.locator('button:has-text("Payment")').click();

      await page.locator(`button:has-text("${payment}")`).click();

      if (ref) {
        // Click [placeholder="Payment reference"]
        await page.locator('[placeholder="Payment reference"]').click();
        // Fill [placeholder="Payment reference"]
        await page.locator('[placeholder="Payment reference"]').fill(ref);
      }

      await page.locator('button:has-text("Create order")').click();

      // Click div[role="dialog"] div[role="separator"] >> text=Receipt
      await expect(page.locator('div[role="dialog"] div[role="separator"] >> text=Receipt')).toBeEnabled();

      // Click [aria-label="Close"]
      await page.locator('[aria-label="Close"]').click();
    })
  }
});