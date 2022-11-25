import { test, expect } from '@playwright/test';
import SignIn from './SignIn';

test.beforeEach(SignIn);

test('Main Setting', async ({ page }) => {


  await page.locator('#eb-admin-actions >> text=Juan').click();
  await page.locator('text=My profile').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/profile');
  expect (page.locator('#root >> text=My Profile')).toBeVisible();

  await page.locator('#eb-admin-actions >> text=Juan').click();
  await page.locator('text=Billing').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/billing/subscription');
  expect (page.locator('span:has-text("Subscription") >> nth=2')).toBeEnabled();
  
  await page.locator('button:has-text("Cancel subscription")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/billing/cancel');
  expect (page.locator('span:has-text("Cancel Subscription")')).toBeVisible();

  await page.locator('text=Invoices').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/billing/invoices');
  await page.locator('b:has-text("Pending invoices")').click();
  await page.locator('text=Invoices history').click();
  await expect (page.locator('h4:has-text("E261748F-0009 Paid")')).toHaveText('E261748F-0009 Paid');

  await page.locator('#eb-admin-actions >> text=Juan').click();
  await page.locator('text=Accounts').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/accounts');
  expect (page.locator('text=Workflow Accounts')).toBeVisible();

  await page.locator('#eb-admin-actions >> text=Juan').click();
  await page.locator('div:nth-child(6) > div:nth-child(2)').first().click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/roles');
  expect (page.locator('#root span:has-text("Roles")')).toBeVisible();

  await page.locator('#eb-admin-actions >> text=Juan').click();
  await page.locator('text=AccountMy profileBillingEasyBiz Cloud WorkflowAccountsRolesEasyBiz mobile >> button').click();
  expect (page.locator('text=Install EasyBiz Cloud Mobile App')).toBeVisible();
  await page.locator('text=AccountMy profileBillingEasyBiz Cloud WorkflowAccountsRolesEasyBiz mobile >> button').click();


  //await page.locator('#eb-admin-actions >> text=Juan').click();
  await page.locator('text=Notification').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/notifications/email');

  //Notification Email

    await page.locator('li[role="menuitem"]:has-text("Email")').click();
    expect (page.locator('main >> text=Email >> nth=1')).toBeEnabled();

    await page.locator('text=Welcome / Verification').click();
    await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/notifications/customer_register/email');
    expect (page.locator('text=Welcome / Verification >> nth=1')).toBeVisible();

    await page.locator('text=Order created').click();
    await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/notifications/order_created/email');
    expect (page.locator('text=Order created >> nth=1')).toBeVisible();

    await page.locator('text=Order price confirmed').click();
    await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/notifications/order_bill_ready/email');
    expect(page.locator('text=Order price confirmed >> nth=1')).toBeVisible();

    await page.locator('text=Order sales return').click();
    await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/notifications/order_sales_return/email');
    expect (page.locator('text=Order sales return >> nth=1')).toBeVisible();

    await page.locator('text=Order completed').click();
    await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/notifications/order_completed/email');
    expect (page.locator('text=Order completed >> nth=1')).toBeVisible();

    await page.locator('text=Order cancelled').click();
    await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/notifications/order_cancelled/email');
    expect (page.locator('text=Order cancelled >> nth=1')).toBeVisible();

    await page.locator('text=Payment failed').click();
    await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/notifications/payment_failed/email');
    expect (page.locator('text=Payment failed >> nth=1')).toBeVisible();

    await page.locator('text=Payment succeed').click();
    await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/notifications/payment_succeed/email');
    expect (page.locator('text=Payment succeed >> nth=1')).toBeVisible();

    await page.locator('text=Collection rescheduled').click();
    await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/notifications/order_rescheduled/email');
    expect (page.locator('text=Collection rescheduled >> nth=1')).toBeVisible();

    await page.locator('text=Ready for collection').click();
    await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/notifications/order_ready_for_collection/email');
    expect (page.locator('text=Ready for collection >> nth=1')).toBeVisible();

    await page.locator('text=Job (re)scheduled').click();
    await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/notifications/logistic_delivery_scheduled/email');
    expect (page.locator('text=Job (re)scheduled >> nth=1')).toBeVisible();

    await page.locator('text=Job failed').click();
    await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/notifications/logistic_delivery_failed/email');
    expect (page.locator('text=Job failed >> nth=1')).toBeVisible();

    await page.locator('text=Job completed').click();
    await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/notifications/logistic_deliveried/email');
    expect (page.locator('text=Job completed >> nth=1')).toBeVisible();


   await page.locator('#eb-admin-actions >> text=Juan').click();
   await page.locator('text=Security').click();
   await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/security/logs');
   //expect (page.locator('text=System logs >> nth=1)')).();

   await page.locator('main ul[role="menu"] >> text=POS').click();
   await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/security/pos');
   //expect (page.locator('text=POS >> nth=1)')).toBeEnabled();

   await page.locator('#root >> text=Mobile App').click();
   await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/security/app');
   //expect (page.locator('text=Mobile App >> nth=1)')).toBeEnabled();

   await page.locator('#root >> text=Console').click();
   await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/security/console');
   //expect (page.locator('text=Console >> nth=1)')).toBeEnabled();

   await page.locator('#eb-admin-actions >> text=Juan').click();
   await page.locator('text=Payment methods').click();
   await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/payment_methods');
   expect (page.locator('text=Online payment methods')).toBeEnabled();

   await page.locator('#eb-admin-actions >> text=Juan').click();
   await page.locator('text=Printing >> nth=1').click();
   await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/printing/receipt-customer');
   await expect(page.locator('span:has-text("Customer receipt") >> nth=2')).toBeEnabled();

   await page.waitForTimeout(3000);

   await page.locator('text=Internal receipt').click();
   await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/printing/receipt-internal');
   expect (page.locator('text=Internal receipt >> nth=1')).toBeEnabled();

   await page.waitForTimeout(3000);

   await page.locator('text=Pick-up receipt').click();
   await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/printing/receipt-pickup');
   expect (page.locator('text=Pick-up receipt >> nth=1')).toBeEnabled();

   await page.waitForTimeout(3000);

   await page.locator('text=Collection receipt').click();
   await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/printing/receipt-collection');
   expect (page.locator('text=Collection/Delivery receipt')).toBeEnabled();

   await page.waitForTimeout(3000);

   await page.locator('text=Receipt templates').click();
   await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/printing/receipt-templates');
   expect (page.locator('text=Plant Receipt Templates')).toBeEnabled();

   await page.locator('text=Item label').click();
   await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/printing/label');
   expect (page.locator('text=Item label >> nth=1')).toBeEnabled();

   await page.locator('text=Pick-up bag label').click();
   await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/printing/pickup-label');
   expect (page.locator('text=Pick-up QR bag label')).toBeEnabled();

   await page.locator('text=Storage label').click();
   await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/printing/storage-label');
   expect (page.locator('text=Storage management')).toBeEnabled();

   await page.locator('text=Package sticker').click();
   await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/printing/sticker');
   expect (page.locator('text=Package sticker >> nth=1')).toBeEnabled();

   await page.locator('#eb-admin-actions >> text=Juan').click();
   await page.locator('text=General').click();
   await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/settings/companys');  
   expect (page.locator('text=Company >> nth=1')).toBeEnabled();

   await page.locator('text=Advance').click();
   await page.locator('span:has-text("Accounting")').first().click();
   await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/settings/accounting');
   expect (page.locator('text=Accounting rules')).toBeEnabled();

   await page.locator('#eb-admin-actions >> text=Juan').click();
   await page.locator('text=System notice').click();
   await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/system_notice');
   expect (page.locator('#root >> text=System Notice')).toBeEnabled();
  
});