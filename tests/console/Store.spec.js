import { test, expect } from '@playwright/test';
import SignIn from './SignIn';

test.beforeEach(SignIn);

test('Store', async ({ page }) => {

  await page.locator('li[role="menuitem"]:has-text("Store")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/store/sales');

  await page.locator('button:has-text("Open POS")').click();
  await page.locator('text=MAIN >> nth=3').click();
  expect (page.locator('a:has-text("Open POS App at current device")')).toBeEnabled()
  
  // Click text=Open MAIN POSOpen POS App at current deviceor, send link to your POS devicehttps >> [aria-label="Close"]
  await page.locator('text=Open MAIN POSOpen POS App at current deviceor, send link to your POS devicehttps >> [aria-label="Close"]').click();

  await page.locator('li[role="menuitem"]:has-text("Sales")').click();
  await expect(page.locator('text=Sales SGD')).toBeEnabled();

  await page.locator('li[role="menuitem"]:has-text("Search")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/store/orders');
  expect (page.locator('text=Orders >> nth=1')).toBeEnabled();

  await page.locator('li[role="menuitem"]:has-text("Calendar")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/store/calendar');
  expect (page.locator('#root div:has-text("2022") >> nth=4')).toBeEnabled();

  await page.locator('li[role="menuitem"]:has-text("Daily orders")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/store/daily-sales');
  expect (page.locator('text=Daily Orders >> nth=1')).toBeEnabled();

  await page.locator('li[role="menuitem"]:has-text("Staff hours")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/store/staff_hours');
  expect (page.locator('text=Staff Hours >> nth=1')).toBeEnabled();

  await page.locator('li[role="menuitem"]:has-text("Popular times")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/store/popular_times');
  expect (page.locator('text=Popular Times >> nth=1')).toBeEnabled();

  await page.locator('li[role="menuitem"]:has-text("Cash drawers")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/store/cash_drawers');
  expect (page.locator('text=Cash Drawers >> nth=1')).toBeEnabled();

  await page.locator('li[role="menuitem"]:has-text("POS settings")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/store/settings/business');
  expect (page.locator('text=POS Settings >> nth=1')).toBeEnabled();

  await page.locator('#root li[role="menuitem"]:has-text("MAIN")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/store/store1/profile');
  expect (page.locator('li[role="menuitem"]:has-text("Store profile")')).toBeEnabled();

  await page.locator('text=Store Profile').nth(1).click();

  await page.locator('li[role="menuitem"]:has-text("Opening hours")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/store/store1/opening-hours');
  expect (page.locator('text=Opening hours >> nth=1')).toBeEnabled();

  await page.locator('li[role="menuitem"]:has-text("Order running no")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/store/store1/order-running-no');
  expect (page.locator('text=Order running number')).toBeEnabled();

  await page.locator('li[role="menuitem"]:has-text("Advance")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/store/store1/advance');
  expect (page.locator('text=Advance >> nth=1')).toBeEnabled();

  await page.locator('#root li[role="menuitem"]:has-text("POINT")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/store/BBM/profile');
  expect (page.locator('text=POINT >> nth=1')).toBeEnabled();

  await page.locator('li[role="menuitem"]:has-text("Add new store")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/subscribe/POS');
  expect (page.locator('text=New store')).toBeEnabled();


});
