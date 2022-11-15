import { test, expect } from '@playwright/test';
import SignIn from './SignIn';

test.beforeEach(SignIn);

test('Online', async ({ page }) => {


  await page.locator('#eb-dashboard-top li[role="menuitem"]:has-text("App")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/app/sales');

  await page.locator('button:has-text("Open Web App")').click();
  expect(page.locator('text=App V2').nth(3).isVisible());

  await page.locator('li[role="menuitem"]:has-text("Sales")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/app/sales');


  await page.locator('li[role="menuitem"]:has-text("Daily orders")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/app/daily-sales');
  expect(page.locator('text=Daily Orders >> nth=1')).toBeEnabled();

  await page.locator('li[role="menuitem"]:has-text("Daily active user")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/app/active-user');
  expect(page.locator('text=Daily Active User >> nth=1')).toBeEnabled();

  await page.locator('li[role="menuitem"]:has-text("Leads")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/app/leads');
  expect(page.locator('text=Leads >> nth=1')).toBeEnabled();

  await page.locator('li[role="menuitem"]:has-text("Live chat")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/app/livechat');
  expect(page.locator('text=Live Chat >> nth=1')).toBeEnabled();

  await page.locator('li[role="menuitem"]:has-text("Referral")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/app/referrals');
  expect(page.locator('text=Referral Program')).toBeEnabled();

  await page.locator('li[role="menuitem"]:has-text("Recurring")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/app/recurrings');
  expect(page.locator('text=Recurring >> nth=1')).toBeEnabled();

  await page.locator('li[role="menuitem"]:has-text("New order")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/app/new');
  expect(page.locator('text=New Order >> nth=1')).toBeEnabled();

  await page.locator('li[role="menuitem"]:has-text("Search")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/app/orders');
  expect(page.locator('text=Orders >> nth=3')).toBeEnabled();

  await page.locator('li[role="menuitem"]:has-text("Calendar")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/app/calendar');
  expect(page.locator('text=2022NovMonthYear')).toBeEnabled();

  await page.locator('#root li[role="menuitem"]:has-text("App V2")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/app/web1');
  expect(page.locator('text=App V2 >> nth=1')).toBeEnabled();

  await page.locator('#root li[role="menuitem"]:has-text("App v1")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/app/web2');

  await page.locator('li[role="menuitem"]:has-text("Add New App")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/subscribe/ONLINE');
  // Click text=New web App
  expect (page.locator('text=New web App')).toBeEnabled();
  

});
