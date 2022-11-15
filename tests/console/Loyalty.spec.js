import { test, expect } from '@playwright/test';
import SignIn from './SignIn';

test.beforeEach(SignIn);

test('Loyalty', async ({ page }) => {

   
  await page.locator('li[role="menuitem"]:has-text("Loyalty")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/loyalty/dashboard');
  
  await page.locator('li[role="menuitem"]:has-text("Dashboard")').click();
  expect (page.locator('text=Dashboard >> nth=1')).toBeEnabled();

  await page.locator('div[role="menuitem"]:has-text("Paid program")').click();
  await page.locator('li[role="menuitem"]:has-text("Members")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/loyalty/member_customers');
  //await expect (page.locator('text=Total SGD')).toBeEnabled();

  await page.locator('li[role="menuitem"]:has-text("Member history")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/loyalty/member_history');
  await expect (page.locator('text=0 new members')).toBeVisible();

  await page.locator('li[role="menuitem"]:has-text("Settings")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/loyalty/member_settings');
  expect (page.locator('text=Member Options')).toBeEnabled();

  await page.locator('div[role="menuitem"]:has-text("Top-up program")').click();

  await page.locator('li[role="menuitem"]:has-text("Customer credits")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/loyalty/crdit_balance');
  //expect (page.locator('text=Total balance')).toBeEnabled();

  await page.locator('li[role="menuitem"]:has-text("Top-up history")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/loyalty/crdit_history');
  expect (page.locator('span:has-text("Total SGD ") >> nth=1')).toBeVisible();

  await page.locator('li[role="menuitem"]:has-text("Settings") >> nth=1').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/loyalty/crdit_settings/options');
  await page.locator('li[role="menuitem"]:has-text("Top-up options")').click();
  expect (page.locator('text=Top-up Options >> nth=1')).toBeEnabled();

  await page.locator('li[role="menuitem"]:has-text("Terms & Conditions")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/loyalty/crdit_settings/terms');
  expect (page.locator('text=Terms & Conditions >> nth=1')).toBeEnabled();

  await page.locator('div[role="menuitem"]:has-text("Points program")').click();

  await page.locator('li[role="menuitem"]:has-text("Customer points")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/loyalty/points_balance');
  //expect (page.locator('text=Total Points')).toBeEnabled();

  await page.locator('li[role="menuitem"]:has-text("Points transactions")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/loyalty/points_history');
  expect (page.locator('text=DownloadPrevious pageNext page DateCustomerOperatorNoteAmountBalance')).toBeEnabled();

  await page.locator('text=Customer pointsPoints transactionsSettings >> [aria-label="setting"] svg').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/loyalty/points_settings/gain-from-payments');
  await page.locator('li[role="menuitem"]:has-text("From payments")').click();
  expect (page.locator('text=Gain points from order payments')).toBeEnabled();

  await page.locator('li[role="menuitem"]:has-text("From recycle items")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/loyalty/points_settings/gain-from-recycle');
  expect (page.locator('text=Recycle Items >> nth=1')).toBeEnabled();

  await page.locator('li[role="menuitem"]:has-text("For payment")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/loyalty/points_settings/redeem-for-payment');
  expect (page.locator('text=Pay order by points')).toBeEnabled();

});