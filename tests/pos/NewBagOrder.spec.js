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

      await page.locator('div:nth-child(3) > .ant-btn').first().click();

      await page.locator('h4:has-text("Bag Service")').click();

      await page.locator('text=Bag & Wallet').click();

      await page.locator('ul[role="menu"] >> text=Brand').click();

      await page.locator('button:has-text("ADIDAS")').click();

      await page.locator('button:has-text("BEIGE")').click();

      await page.locator('text=Serial Number').click();

      await page.locator('text=Bag & Wallet #1RemoveItem total: SGD 0.00Line item detailsBrandColorSerial Numbe >> textarea').fill('test12345678');

      await page.locator('text=Material').click();

      await page.locator('button:has-text("CANVAS")').click();

      await page.locator('text=Size').click();

      await page.locator('button:has-text("SMALL")').click();

      await page.locator('button:has-text("WEAR & TEAR")').click();

      await page.locator('button:has-text("OIL/ FOOD STAIN")').click();

      await page.locator('button:has-text("COLOUR STAIN")').click();

      await page.locator('text=Service Types').click();

      await page.locator('text=HP Coating (Large Book Tote)[HP]SGD 180.00 ~ HP Coating[HP 2]SGD 75.00 ~ SGD 200 >> button').first().click();

      await page.locator('button:has-text("SGD 180.00")').click();

      await page.locator('div[role="dialog"] button:has-text("Discount")').click();

      await page.locator('button:has-text("1")').nth(2).click();

      await page.locator('button:has-text("0")').nth(2).click();

      await page.locator('button:has-text("Update")').click();

      await page.locator('button:has-text("OK")').click();

      await expect(page.locator('button:has-text("SGD 170.00")')).toBeEnabled();

      await page.locator('ul[role="menu"] >> text=Collection').click();

      await page.locator('tbody >> text=17').click();

      await page.locator('button:has-text("Complete & Close")').click();

      await page.locator('text=Need further confirmationSGD 170.00 >> input[type="checkbox"]').click();
      

      //await page.locator('text=[7193] CSS +65 9099 9564 New orderTotal 1 unit#1 Bag & Walletx1 pcsSGD 170.00HP  >> textarea').fill('test order note');


      await page.locator('button:has-text("Discount")').click();
  
      await page.locator('text=General discount10% discount percentageWaived minimum order >> button').first().click();
  
      await page.locator('button:has-text("Surcharge")').click();
  
      await page.locator('text=Add SurchargesReturn delivery charge >> button').click();
      
      page.locator(".flex > div:nth-child(4) > div").textContent(/Return delivery charge/);

      await page.locator('button:has-text("Payment")').click();

      await page.locator(`button:has-text("${payment}")`).click();

      if (ref) {

        await page.locator('[placeholder="Payment reference"]').click();
        await page.locator('[placeholder="Payment reference"]').fill(ref);

      }

      await page.locator('button:has-text("Create order")').click();

      await expect(page.locator('span:has-text("Receipt") >> nth=1')).toBeEnabled();

    

      //test('Redo order', async ({page}) => {
      
      await page.locator('button:has-text("Progress")').click();
      
      await page.locator('button:has-text("Redo")').click();
  
      await page.locator('button:has-text("#1")').click();
  
      await page.locator('.ant-space-item > div > .ant-input').first().click();
  
      await page.locator('.ant-space-item > div > .ant-input').first().fill('test');
  
      await page.locator('text=Collection date').click();

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