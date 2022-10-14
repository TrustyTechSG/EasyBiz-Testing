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

  for (const { search, payment, ref} of CASES) {
    test(`${search} - ${payment}`, async ({ page }) => {
      await selectCustomer(page, search);

      await page.locator('.ant-card').first().click();
      
      await page.locator('text=IroningSGD 5.000 pcs >> button').nth(2).click({clickCount: 8});

      await expect(page.locator('li:has-text("#1 T-Shirt/Polo Shirtx8 pcsSGD 40.00Ironing")')).toBeVisible();

      await page.locator('text=#1 T-Shirt/Polo Shirtx8 pcsSGD 40.00IroningSubtotal8 unitsSGD 40.00Promo codeDis >> textarea').click();
  
      await page.keyboard.type("order note");

      await page.locator('button:has-text("Discount")').click();
  
      await page.locator('text=General Discount').first().click();
  
      await page.locator('button:has-text("Surcharge")').click();
  
      await page.locator('text=Delivery charge').first().click();
      
      page.locator(".flex > div:nth-child(4) > div").textContent(/Delivery charge/);

      await page.locator('button:has-text("Payment")').click();

      await page.locator(`button:has-text("${payment}")`).click();

      if (ref) {

        await page.locator('[placeholder="Payment reference"]').click();
        await page.locator('[placeholder="Payment reference"]').fill(ref);

      }

      await page.locator('button:has-text("Create order")').click();

      await expect(page.locator('div[role="dialog"] div[role="separator"] >> text=Receipt')).toBeEnabled();

    

      //test('Redo order', async ({page}) => {
      
      await page.locator('button:has-text("Progress")').click();
      
      await page.locator('button:has-text("Redo")').click();
  
      await page.locator('button:has-text("#1")').click();
  
      await page.locator('.ant-space-item > div > .ant-input').first().click();
  
      await page.locator('.ant-space-item > div > .ant-input').first().fill('test');
  
      await page.locator('text=Schedule').click();

      await page.locator('.ant-drawer-body > .ant-row > div:nth-child(2) > .ant-picker-calendar > .ant-picker-panel > .ant-picker-date-panel > .ant-picker-body > .ant-picker-content > tbody > tr:nth-child(5) > td:nth-child(6) > .ant-picker-cell-inner > .ant-picker-calendar-date-value').click();
  
      await page.locator('text=Create redo order').click();
  
      await expect(page.locator('text=REDO:')).toBeEnabled();
    
      expect(page.locator('text=Total SGD0.00')).toBeEnabled();

      //});

      //test('Cancel order', async ({page}) => {


      await page.locator('button:has-text("Progress")').click();
      
      await page.locator('button:has-text("Cancel order (Void)")').click();
      
      await page.keyboard.type("cancel order note");

      await page.locator('text=Cancel order').nth(2).press('Enter');


      //xpect(page.keyboard.press('Enter'));
      await expect(page.locator('text=Progess')).toBeEnabled();

      expect(page.locator(`text=Cancel ${STAFF_NAME}`));

     // });
    });
  };
    
  });