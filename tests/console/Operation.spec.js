import { test, expect } from '@playwright/test';
import SignIn from './SignIn';

test.beforeEach(SignIn);

test('Operation', async ({ page }) => {

  await page.locator('li[role="menuitem"]:has-text("Operation")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/operation/dashboard');
  expect (page.locator('li[role="menuitem"]:has-text("Dashboard")')).toBeEnabled();

  await page.locator('li[role="menuitem"]:has-text("Reviews")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/operation/reviews');
  expect (page.locator('text=Customer Reviews')).toBeEnabled();

  await page.locator('li[role="menuitem"]:has-text("Feedback settings")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/operation/feedback-settings');
  expect (page.locator('text=Feedback Settings >> nth=1')).toBeEnabled();

  await page.locator('li[role="menuitem"]:has-text("Production monitor")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/operation/production-monitor/FACTORY');
  expect (page.locator('text=Production Monitor >> nth=1')).toBeEnabled();

  await page.locator('li[role="menuitem"]:has-text("Business agent")').first().click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/operation/business-agent');
  expect (page.locator('span:has-text("Business Agent") >> nth=1')).toBeEnabled();

  await page.locator('li[role="menuitem"]:has-text("Report cases")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/operation/reports');
  expect (page.locator('text=Report Cases >> nth=1')).toBeEnabled();

  await page.locator('li[role="menuitem"]:has-text("Production settings")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/operation/production-setting');
  expect (page.locator('text=Production Settings >> nth=1')).toBeEnabled();

  await page.locator('li[role="menuitem"]:has-text("Collection points")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/operation/collection-points');
  expect (page.locator('text=Collection Points >> nth=1')).toBeEnabled();

});
