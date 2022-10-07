import { expect, test } from '@playwright/test';
import clockIn from './clockIn';
import selectCust from './selectCust';

test.beforeEach(clockIn);
test.beforeEach(selectCust);

test('New order', async ({ page }) => {

      // Click button:has-text("Payment")
      await page.locator('button:has-text("Payment")').click();

      await page.locator('button:has-text("Cash")').click();

      await page.locator('button:has-text("Create order")').click();

      // Click div[role="dialog"] div[role="separator"] >> text=Receipt
      await expect (page.locator('div[role="dialog"] div[role="separator"] >> text=Receipt')).toBeEnabled();
        
      // Click [aria-label="Close"]
      await page.locator('[aria-label="Close"]').click();

//Paynow  
 
  test('Paynow',selectCust);
        // Click button:has-text("Payment")
        await page.locator('button:has-text("Payment")').click();
  
        await page.locator('button:has-text("PAYNOW")').nth(1).click();  
        
        await page.locator('button:has-text("Create order")').click();
  
        // Click div[role="dialog"] div[role="separator"] >> text=Receipt
        await expect (page.locator('div[role="dialog"] div[role="separator"] >> text=Receipt')).toBeEnabled();
          
        // Click [aria-label="Close"]
        await page.locator('[aria-label="Close"]').click();

//Unpaid  

      test('Unpaid',selectCust);
      // Click button:has-text("Payment")
      await page.locator('button:has-text("Payment")').click();

      await page.locator('text=Unpaid').click(); 
      
      await page.locator('button:has-text("Create order")').click();

      // Click div[role="dialog"] div[role="separator"] >> text=Receipt
      await expect (page.locator('div[role="dialog"] div[role="separator"] >> text=Receipt')).toBeEnabled();
        
      // Click [aria-label="Close"]
      await page.locator('[aria-label="Close"]').click();

// cards

  test('Cards',selectCust);
  // Click button:has-text("Payment")
  await page.locator('button:has-text("Payment")').click();

  await page.locator('button:has-text("CARDS")').click();

  // Click [placeholder="Payment reference"]
  await page.locator('[placeholder="Payment reference"]').fill('test payment');

  await page.locator('button:has-text("Create order")').click();

  // Click div[role="dialog"] div[role="separator"] >> text=Receipt
  await expect (page.locator('div[role="dialog"] div[role="separator"] >> text=Receipt')).toBeEnabled();
    
  // Click [aria-label="Close"]
  await page.locator('[aria-label="Close"]').click();
  
});