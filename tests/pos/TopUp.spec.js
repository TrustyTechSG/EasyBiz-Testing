import { expect, test } from '@playwright/test';
import clockIn from './clockIn';
import selectCustomer from './selectCustomer';

test.describe.configure({ mode: 'parallel' });

const CASES = [
  { search: '7193', payment: 'CASH' },
  { search: '7193', payment: 'PAYNOW' },
  { search: '7193', payment: 'CARDS', ref: 'test' },
];

test.describe('TopUp', () => {
  test.beforeEach(clockIn);

  for (const { search, payment, ref } of CASES) {
    test(`${search} - ${payment}`, async ({ page }) => {

      await selectCustomer(page, search);

      await page.locator('div:nth-child(3) > div:nth-child(2) > div > .ant-btn').first().click();
      
      await page.locator('text=#1').click();

      await expect(page.locator('div:nth-child(3) > .ant-drawer-content > .ant-drawer-wrapper-body > .ant-drawer-body > div > div:nth-child(2) > div')).toBeVisible();

      await page.locator('button:has-text("Payment")').nth(1).click();

      await page.locator(`button:has-text("${payment}")`).click();

      if (ref) {
   
       await page.locator('[placeholder="Payment reference"]').click();
       await page.locator('[placeholder="Payment reference"]').fill(ref);

      }

      await page.locator('button:has-text("Make payment")').click();
      
      await page.locator('span:has-text("Top Up Receipt")').isEnabled();
  

    })
  }
  
});