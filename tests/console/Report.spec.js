import { test, expect } from '@playwright/test';
import SignIn from './SignIn';

test.beforeEach(SignIn);

test('Reports', async ({ page }) => {
  
  await page.locator('#eb-dashboard-bottom li[role="menuitem"]:has-text("Report")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/report/sales-statistic');

  await page.locator('li[role="menuitem"]:has-text("Sales statistic")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/report/sales-statistic');
  expect (page.locator('text=Total Sales SGD')).toBeEnabled();

  await page.locator('li[role="menuitem"]:has-text("Sales breakdown")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/report/sales-brekdowns');
  expect (page.locator('text=Total Sales SGD ')).toBeEnabled();

  await page.locator('li[role="menuitem"]:has-text("Orders")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/report/orders');
  expect (page.locator('text=Total 0 Orders')).toBeEnabled();

  await page.locator('li[role="menuitem"]:has-text("Pending confirm")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/report/pending_confirmation');
  expect (page.locator('text=Total >> nth =1')).toBeEnabled();

  await page.locator('li[role="menuitem"]:has-text("Outstandings")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/report/outstandings');
  expect (page.locator('thead >> text=Outstanding')).toBeEnabled();

  await page.locator('li[role="menuitem"]:has-text("Payments")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/report/payments');
  expect (page.locator('span:has-text("SGD") >> nth=1')).toBeEnabled();

  await page.locator('li[role="menuitem"]:has-text("Refunds")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/report/refunds');
  expect (page.locator('span:has-text("SGD") >> nth=1')).toBeEnabled();

  await page.locator('li[role="menuitem"]:has-text("Top Ups")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/report/top-ups');
  expect (page.locator('text=Total SGD ')).toBeEnabled();

  await page.locator('li[role="menuitem"]:has-text("Sales returns")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/report/sales-returns');
  expect (page.locator('text=Total >> nth=1')).toBeEnabled();

  await page.locator('li[role="menuitem"]:has-text("Cancellations")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/report/cancellations');
  expect (page.locator('text=Total >> nth=1')).toBeEnabled();

  await page.locator('li[role="menuitem"]:has-text("Business agents")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/report/business-agents/Central%20factory');
  expect (page.locator('text=Business Agents >> nth=1')).toBeEnabled();

  await page.locator('li[role="menuitem"]:has-text("Pending discharge")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/report/pending-discharge');
  expect (page.locator('text=Store/AppComplete ExportPrevious pageNext page')).toBeEnabled();

  await page.locator('main li[role="menuitem"]:has-text("Customer")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/report/customer-spendings');
  expect (page.locator('text=Customer statistics by last payment date')).toBeEnabled();

});