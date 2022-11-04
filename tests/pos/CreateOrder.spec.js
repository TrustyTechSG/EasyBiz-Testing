import { expect, test } from '@playwright/test';
import clockIn from './clockIn';
import selectCustomer from './selectCustomer';

test.describe.configure({ mode: 'parallel' });

const CASES = [
  { search: '7193', payment: 'CASH' },
  { search: '7193', payment: 'PAYNOW' },
  { search: '7193', payment: 'CARDS', ref: 'test' },
  { search: '7193', payment: 'Unpaid' },
  { search: '7193', payment: 'Advance credit' },
  { search: '7193', payment: 'Use points' },
];

test.describe('Create order', () => {
  test.beforeEach(clockIn);

  for (const { search, payment, ref } of CASES) {
    test(`${search} - ${payment}`, async ({ page }) => {
      await selectCustomer(page, search);

      await page.locator('button:has-text("Payment")').click();

      await page.locator(`button:has-text("${payment}")`).click();

      if (ref) {
        await page.locator('[placeholder="Payment reference"]').click();

        await page.locator('[placeholder="Payment reference"]').fill(ref);
      }

      await page.locator('button:has-text("Create order")').click();

      await expect(page.locator('div[role="dialog"] div[role="separator"] >> text=Receipt')).toBeEnabled();

    })
  }
});