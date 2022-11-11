import { test, expect } from '@playwright/test';
import SignIn from './SignIn';

test.beforeEach(SignIn);

test('Plant', async ({ page }) => {

   await page.locator('#eb-dashboard-top li[role="menuitem"]:has-text("Plant")').click();

   await page.locator('li[role="menuitem"]:has-text("Sales")').click();

   await page.locator('text=Sales SGD').click();

   await page.locator('li[role="menuitem"]:has-text("Search")').click();
   await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/plant/orders');

   expect(page.locator('text=Orders')).toBeEnabled();

   await page.locator('li[role="menuitem"]:has-text("Plant check-out")').click();
   await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/plant/check-out');

   expect(page.locator('text=Check Out History')).toBeEnabled();

   await page.locator('li[role="menuitem"]:has-text("Monthly billing")').click();
   await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/plant/invoicing');

   expect (page.locator('[placeholder="Select month"]')).toBeEnabled();

   await page.locator('li[role="menuitem"]:has-text("SKUs")').click();
   await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/plant/sku');

   expect (page.locator('text=SKUs >> nth=1')).toBeEnabled();

   await page.locator('li[role="menuitem"]:has-text("Price lists")').click();
   await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/plant/price-lists');

   expect (page.locator('text=Price Lists >> nth=1')).toBeEnabled();

   await page.locator('li[role="menuitem"]:has-text("Order flow")').click();
   await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/plant/order-flow');

   expect (page.locator('text=Order Flow >> nth=1')).toBeEnabled();

   await page.locator('li[role="menuitem"]:has-text("Agents")').click();
   await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/plant/agents');

   expect (page.locator('span:has-text("Agents") >> nth=1')).toBeEnabled();

   await page.locator('li[role="menuitem"]:has-text("Breakdown templates")').click();
   await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/plant/billing/new');

   expect (page.locator('text=Templates >> nth=1')).toBeEnabled();

   await page.locator('li[role="menuitem"]:has-text("Surcharge/Discount")').click();
   await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/plant/discount-surcharge');

   expect (page.locator('text=Surcharge/Discount Options')).toBeEnabled();
  

});