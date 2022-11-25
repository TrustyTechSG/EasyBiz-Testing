import { test, expect } from '@playwright/test';
import SignIn from './SignIn';

test.beforeEach(SignIn);

test('Business', async ({ page }) => {
  
  // Click li[role="menuitem"]:has-text("App")
 await page.locator('li[role="menuitem"]:has-text("App")').click();
 await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/app/sales');
 // Click text=New order
 await page.locator('text=New order').click();
 await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/app/new');
 // Click .ant-select-selector >> nth=0
 await page.locator('.ant-select-selector').first().click();
 // Click .ant-select-selector >> nth=0
 // Click text=App V2 >> nth=1
 await page.locator('text=App V2').nth(1).click();
 // Click text=Search customerNew customer >> input[role="combobox"]
 await page.locator('text=Search customerNew customer >> input[role="combobox"]').click();
 // Click text=[7515]
 await page.locator('text=[7514]').click();
 // Click button:has-text("Preview new order")
 await page.locator('button:has-text("Preview new order")').click();
 // Click text=PickupPending scheduleSchedule >> button
 await page.locator('text=PickupPending scheduleSchedule >> button').click();
 // Click button:has-text("20:00~22:00") >> nth=0
 await page.locator('button:has-text("20:00~22:00")').first().click();
 // Click button:has-text("OK") >> nth=1
 await page.locator('button:has-text("OK")').nth(1).click();
 // Click button:has-text("Create order")
 await page.locator('button:has-text("Create order")').click();
 // Click text=New Order PreviewCreate order >> [aria-label="Close"]
 await page.locator('text=New Order PreviewCreate order >> [aria-label="Close"]').click();
 // Click div:nth-child(3) > .ant-drawer-content > .ant-drawer-wrapper-body > .ant-drawer-body
 await page.locator('button:has-text("Preview new order")').click();

 await page.locator('button:has-text("Create order")').click();

});