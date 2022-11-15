import { test, expect } from '@playwright/test';
import SignIn from './SignIn';

test.beforeEach(SignIn);

test('Marketing', async ({ page }) => {

  await page.locator('li[role="menuitem"]:has-text("Marketing")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/marketing/channels');

  await page.locator('li[role="menuitem"]:has-text("Marketing channels")').click();
  expect (page.locator('text=Marketing Channels >> nth=1')).toBeEnabled();

  await page.locator('li[role="menuitem"]:has-text("Articles")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/marketing/articles');
  expect (page.locator('text=Articles >> nth=1')).toBeEnabled();

  await page.locator('li[role="menuitem"]:has-text("Promotions")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/marketing/promotions');
  expect (page.locator('text=Promotions >> nth=1')).toBeEnabled();

  await page.locator('li[role="menuitem"]:has-text("Promo code")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/marketing/promocode');
  expect (page.locator('span:has-text("Promo Code") >> nth=1')).toBeEnabled();

  await page.locator('li[role="menuitem"]:has-text("Batch voucher")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/marketing/batch_voucher');
  expect (page.locator('text=Batch Voucher >> nth=1')).toBeEnabled();

  await page.locator('li[role="menuitem"]:has-text("Birthday promo")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/marketing/birthday_promo');
  expect (page.locator('text=Birthday Promo >> nth=1')).toBeEnabled();
  

});
