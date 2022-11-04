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

      await page.locator('button:has-text("Promo code")').click();

      await page.locator('[placeholder="enter code"]').fill('TEST');

      //await page.locator('[placeholder="enter code"]').press('Enter');

      await page.locator('button:has-text("Use")').click();

      await expect(page.locator('text=TEST(20% off)')).toBeEnabled();

      await page.locator('button:has-text("Remove")').click();

      expect(page.locator('text=TEST(20% off)')).toBeHidden();

      await page.locator('button:has-text("Discount")').click();
  
      await page.locator('text=General discount10% discount percentageMONEYMAX VOUCHER $50Waived minimum order >> button').first().click();
    
      await expect(page.locator('span:has-text("General discount")')).toBeEnabled();

      await page.locator('button:has-text("Surcharge")').click();
  
      await page.locator('text=Delivery chargeExpress delivery Deposit >> button').first().click();
   
      await expect(page.locator('span:has-text("Delivery charge")')).toBeEnabled();
      
      //page.locator(".flex > div:nth-child(4) > div").textContent(/Delivery charge/);

      await page.locator('button:has-text("Payment")').click();

      await page.locator(`button:has-text("${payment}")`).click();

      if (ref) {

        await page.locator('[placeholder="Payment reference"]').click();
        await page.locator('[placeholder="Payment reference"]').fill(ref);

      }

      await page.locator('button:has-text("Create order")').click();

      await expect(page.locator('div[role="dialog"] div[role="separator"] >> text=Receipt')).toBeEnabled();

      // test sales return 

      await page.locator('button:has-text("Payment")').nth(1).click();

      await page.locator('button:has-text("Sales return")').click();

      await page.locator('button:has-text("By enter return amount")').click(1);

      await page.locator('button:has-text("5") >> nth=1').click();

      await page.locator('button:has-text("OK")').click();

      await page.locator('text=#02088 Sales returnSales return amount: SGD 5.00CancelSubmit sales return >> button').nth(1).click();

      await page.locator('button:has-text("5") >> nth=1').click();

      await page.locator('button:has-text("OK")').click();

      await page.locator('text=#02067 Sales returnSales return amount: SGD 1.00CancelSubmit sales return >> textarea').fill('test sales return by amount');

      await page.locator('button:has-text("Submit sales return")').click();

      await expect(page.locator('text=Sales return submitted, pending admin approval')).toBeEnabled();

      //});

      //test('Redo order', async ({page}) => {
      
        await page.locator('button:has-text("Progress")').click();
      
        await page.locator('button:has-text("Redo")').click();
    
        await page.locator('button:has-text("#1")').click();
    
        await page.locator('.ant-space-item > div > .ant-input').first().click();
    
        await page.locator('.ant-space-item > div > .ant-input').first().fill('test');
    
        await page.locator('button:has-text("Collection date")').click();
  
        await page.locator('div[role="tooltip"] >> text=11').click();
    
        await page.locator('text=Create redo order').click();
    
        await expect(page.locator('text=REDO:')).toBeEnabled();
    
      //expect(page.locator('text=Total SGD0.00')).toBeEnabled();

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