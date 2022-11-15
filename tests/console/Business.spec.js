import { test, expect } from '@playwright/test';
import SignIn from './SignIn';

test.beforeEach(SignIn);

test('Business', async ({ page }) => {

  await page.locator('#eb-dashboard-bottom li[role="menuitem"]:has-text("Business")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/business/LAUNDRY/pricing');
  expect (page.locator('span:has-text("Business") >> nth=1')).toBeEnabled();

  await page.locator('text=BusinessBusiness >> button').click();

  //(12)Laundry & Dry CleanAlterationBag ServiceAircon ServicingHom

  await expect (page.locator('text=Open New Business')).toBeEnabled();

  await page.locator('text=Open New BusinessPlease select the type of your new businessLaundry & Dry CleanA >> [aria-label="Close"]').click();

  await page.locator('li[role="menuitem"]:has-text("Pricing")').click();
  expect (page.locator('text=Pricing >> nth=1')).toBeEnabled();

  await page.locator('li[role="menuitem"]:has-text("Service types")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/business/LAUNDRY/service-types');
  expect (page.locator('text=Service Types >> nth=1')).toBeEnabled();

  await page.locator('div[role="menuitem"]:has-text("Store POS order")').click();
  await page.locator('text=Collection options').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/business/LAUNDRY/store-collection');
  await page.locator('li[role="menuitem"]:has-text("Collection options")').click();
  expect (page.locator('text=Collection Options >> nth=1')).toBeEnabled();

  await page.locator('li[role="menuitem"]:has-text("Minimum order")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/business/LAUNDRY/store-minimum');
  expect (page.locator('text=Store Order Minimum')).toBeEnabled();

  await page.locator('div[role="menuitem"]:has-text("Online booking")').click();
  await page.locator('li[role="menuitem"]:has-text("Servicing area")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/business/LAUNDRY/booking-area');
  expect (page.locator('text=Booking Servicing Area')).toBeEnabled();

  await page.locator('li[role="menuitem"]:has-text("Time slot")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/business/LAUNDRY/booking-time');
  expect (page.locator('text=Booking Time Slots')).toBeVisible();

  await page.locator('li[role="menuitem"]:has-text("Delivery options")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/business/LAUNDRY/booking-delivery');
  expect (page.locator('text=Delivery Options >> nth=1')).toBeEnabled();

  await page.locator('li[role="menuitem"]:has-text("Booking steps")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/business/LAUNDRY/booking-steps');
  expect (page.locator('text=Online Booking Steps')).toBeEnabled();

  await page.locator('li[role="menuitem"]:has-text("FAQ/Guide")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/business/LAUNDRY/booking-faq');
  expect (page.locator('text=FAQ >> nth=1')).toBeEnabled();

  await page.locator('li[role="menuitem"]:has-text("Logistic control")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/business/LAUNDRY/logistic-control');
  expect (page.locator('text=Logistic Control >> nth=1')).toBeEnabled();

  await page.locator('li[role="menuitem"]:has-text("Business profile")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/business/LAUNDRY/profile');
  expect (page.locator('text=Business Profile >> nth=1')).toBeEnabled();

  await page.locator('div[role="menuitem"]:has-text("Terms & Conditions")').click();
  await page.locator('li[role="menuitem"]:has-text("For receipt footer")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/business/LAUNDRY/tc_printing');
  expect (page.locator('text=Terms & Conditions >> nth=1')).toBeEnabled();

  await page.locator('li[role="menuitem"]:has-text("For App display")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/business/LAUNDRY/tc_html');
  expect (page.locator('text=Terms & Conditions >> nth=1')).toBeEnabled();

  await page.locator('li[role="menuitem"]:has-text("Add-ons")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/business/LAUNDRY/addons');
  expect (page.locator('text=Add-ons >> nth=1')).toBeEnabled();

  await page.locator('li[role="menuitem"]:has-text("Accessories")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/business/LAUNDRY/accessories');
  expect (page.locator('text=Accessories >> nth=1')).toBeEnabled();

  await page.locator('li[role="menuitem"]:has-text("Delete business")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/business/LAUNDRY/delete');
  expect (page.locator('text=Delete Business >> nth=1')).toBeEnabled();


});