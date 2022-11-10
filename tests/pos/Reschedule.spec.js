import { test, expect } from '@playwright/test';
import clockIn from './clockIn';

test.describe('Order collection', () => {

test.beforeEach(clockIn);

test('Reschedule', async ({ page }) => {

  
  await page.locator('div:nth-child(2) > div:nth-child(2) > .ant-btn').click();

  await page.locator('div[role="tab"]:has-text("Quick Search")').click();

    await page.locator('div[role="tabpanel"] button:has-text("0")').click();
    await page.locator('div[role="tabpanel"] button:has-text("2")').click();
    await page.locator('div[role="tabpanel"] button:has-text("1")').click();
    await page.locator('button:has-text("7")').click();
    await page.locator('div[role="tabpanel"] button:has-text("2")').click();
  

  await page.locator('button:has-text("Find")').click();

  await expect(page.locator('text=#02172 (POINT)')).toBeEnabled();

  await page.locator('button:has-text("Collection")').click();

  await page.locator('button:has-text("November")').click();

  await expect(page.locator('text=Schedule Collection Date')).toBeEnabled();

  await page.locator('text=Express time').click();

  await expect(page.locator('text=Reschedule Collection?')).toBeEnabled();

  //await page.locator('text=Option: Express time').click();

  await expect(page.locator('text=Option: Express time+100% surcharge')).toBeEnabled();

  //await page.locator('text=Date: November 10, 2022Old option: Express time +100%Option: No surcharge >> textarea').fill('Reschedule');
  
  await page.locator('button:has-text("Reschedule")').click();

  await expect(page.locator('text=Collection date rescheduled')).toBeEnabled();

});

test('Collection place', async ({ page }) => {

  await page.locator('div:nth-child(2) > div:nth-child(2) > .ant-btn').click();

  await page.locator('div[role="tab"]:has-text("Quick Search")').click();

    await page.locator('div[role="tabpanel"] button:has-text("0")').click();
    await page.locator('div[role="tabpanel"] button:has-text("2")').click();
    await page.locator('div[role="tabpanel"] button:has-text("1")').click();
    await page.locator('button:has-text("7")').click();
    await page.locator('div[role="tabpanel"] button:has-text("2")').click();
  

  await page.locator('button:has-text("Find")').click();

  await expect(page.locator('text=#02172 (POINT)')).toBeEnabled();

  await page.locator('button:has-text("Collection")').click();

  await page.locator('text=POINTCollection place >> button').click();

  await page.locator('li:has-text("MAIN")').click();

  await expect(page.locator('text=Collection place updated to MAIN')).toBeVisible();
  
  await expect(page.locator('button:has-text("MAIN")')).toBeEnabled();

  await page.locator('button:has-text("Receipt")').first().click();

  await expect(page.locator('text=Return type Self collection at MAIN')).toBeEnabled();

  await page.locator('button:has-text("Collection")').click();

  await page.locator('button:has-text("MAIN")').click();

  await page.locator('li:has-text("POINT")').click();


});

test('Notice for collection', async ({ page }) => {

  await page.locator('div:nth-child(2) > div:nth-child(2) > .ant-btn').click();

  await page.locator('div[role="tab"]:has-text("Quick Search")').click();

    await page.locator('div[role="tabpanel"] button:has-text("0")').click();
    await page.locator('div[role="tabpanel"] button:has-text("2")').click();
    await page.locator('div[role="tabpanel"] button:has-text("1")').click();
    await page.locator('button:has-text("7")').click();
    await page.locator('div[role="tabpanel"] button:has-text("2")').click();
  

  await page.locator('button:has-text("Find")').click();

  await expect(page.locator('text=#02172 (POINT)')).toBeEnabled();

  await page.locator('button:has-text("Collection")').click();

  await page.locator('button:has-text("Notice for collection")').click();

  await expect(page.locator('text=Send ready for collection email to')).toBeEnabled();

  await page.locator('button:has-text("Send email")').click();

  await expect(page.locator('text=Email sent to juanhong@easybizcloud.com, checking delivery status...(click to di')).toBeEnabled();


});


test('Change to home delivery', async ({ page }) => {

  
  await page.locator('div:nth-child(2) > div:nth-child(2) > .ant-btn').click();

  await page.locator('div[role="tab"]:has-text("Quick Search")').click();

    await page.locator('div[role="tabpanel"] button:has-text("0")').click();
    await page.locator('div[role="tabpanel"] button:has-text("2")').click();
    await page.locator('div[role="tabpanel"] button:has-text("1")').click();
    await page.locator('button:has-text("7")').click();
    await page.locator('div[role="tabpanel"] button:has-text("0")').click();
  

  await page.locator('button:has-text("Find")').click();

  await expect(page.locator('text=#02170 (POINT)')).toBeEnabled();

  await page.locator('button:has-text("Collection")').click();



  // Click button:has-text("Change to home delivery")
  await page.locator('button:has-text("Change to home delivery")').click();
  // Click text=Wednesday, November 16, 202209:00~11:00 >> button
  await page.locator('text=Wednesday, November 16, 202209:00~11:00 >> button').click();
  // Click button:has-text("OK")
  await page.locator('button:has-text("OK")').click();

});


});