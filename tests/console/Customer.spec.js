import { test, expect } from '@playwright/test';
import SignIn from './SignIn';

test.beforeEach(SignIn);

test('Customer', async ({ page }) => {

  await page.locator('li[role="menuitem"]:has-text("Customer")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/customer');
  expect (page.locator('text=Total Customers ')).toBeEnabled();

  await page.locator('button:has-text("New customer")').click();
  await page.locator('text=New CustomerFromNew customer from which store/AppNameTelPhoneAddEmailPrivate not >> [aria-label="Close"]').click();
  
  await page.locator('button:has-text("Import")').click();
  expect (page.locator('text=Import customers')).toBeEnabled();
  await page.locator('text=Import customersUpload customer excel filePrepare import >> [aria-label="Close"]').click();

  await page.locator('button:has-text("Export")').click();
  expect (page.locator('text=Export customers')).toBeEnabled();
  // Click text=Export customersExport by store/App Leave it empty to expire from all store/Apps >> [aria-label="Close"]
  await page.locator('text=Export customersExport by store/App Leave it empty to expire from all store/Apps >> [aria-label="Close"]').click();

  

});
