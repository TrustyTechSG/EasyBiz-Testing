import { test, expect } from '@playwright/test';
import SignIn from './SignIn';


test.describe('Operation test', () => {

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

test('Review' , async ({ page }) => {

  await page.locator('li[role="menuitem"]:has-text("Operation")').click();

  await page.locator('text=Reviews').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/operation/reviews');

  await expect (page.locator('text=Customer Reviews')).toBeEnabled();

  await page.locator('button:has-text("Add review")').click();

  await page.locator('text=Add reviewCustomerSearch customerNew customerAppBusinessBusinessRateMessageRevie >> [aria-label="Close"]').click();

  await page.locator('button:has-text("Add review")').click();

  await page.locator('text=Search customerNew customer >> div').nth(2).click();

  await page.locator('text=Search customerNew customer >> input[role="combobox"]').fill('7059');

  await page.locator('text=[7059]').click();

  await page.locator('.ant-form-item-control-input-content > .ant-select > .ant-select-selector').first().click();

  await page.locator('text=App V2').click();

  await page.locator('div:nth-child(2) > .ant-form-item > .ant-row > div:nth-child(2) > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector').click();

  await page.locator('.ant-select-dropdown > div > .rc-virtual-list > .rc-virtual-list-holder > div > .rc-virtual-list-holder-inner > div:nth-child(2) > .ant-select-item-option-content').click();

  await page.locator('text=CustomerEdit customerAppApp V2BusinessLAUNDRYLaundry & Dry CleanRateMessageRevie >> div[role="radio"]').nth(3).click();

  await page.locator('text=CustomerEdit customerAppApp V2BusinessLaundry & Dry CleanRateMessageReview date >> textarea').click();

  await page.locator('text=CustomerEdit customerAppApp V2BusinessLaundry & Dry CleanRateMessageReview date >> textarea').fill('thanks');

  await page.locator('[placeholder="Select date"]').click();

  await page.locator('text=Today').click();

  await page.locator('button:has-text("OK")').nth(1).click();

  await page.locator('text=thanks').first().click();

  await page.locator('button:has-text("Delete")').click();

  await expect (page.locator('text=Delete customer review?')).toBeEnabled();

  await page.locator('button:has-text("OK")').nth(1).click();

  await expect (page.locator('text=Customer review deleted')).toBeVisible();




  });


test('Feedback setting' , async ({ page }) => {

  await page.locator('li[role="menuitem"]:has-text("Operation")').click();

  await page.locator('text=Feedback settings').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/operation/feedback-settings');

  await expect (page.locator('text=Feedback Settings >> nth=1')).toBeEnabled();

  await page.locator('.ant-card-extra > .ant-btn').first().click();

  await page.locator('text=New optionFeedback option is a selectable checkbox option customers can easily c >> [aria-label="Close"]').click();

  await page.locator('.ant-card-extra > .ant-btn').first().click();

  await page.locator('[placeholder="Quality not good"]').click();

  await page.locator('[placeholder="Quality not good"]').fill('Not clean');

  await page.locator('.ant-select-selection-overflow').click();

  await page.locator('text=1 star').click();

  await page.locator('text=Show feedback option when customer rated...').click();

  await page.locator('button:has-text("OK") >> nth=1').click();

  await expect (page.locator('text=Not clean')).toBeEnabled();

  await page.locator('text=Not clean').click();

  await page.locator('text=Edit option').click();

  await page.locator('button:has-text("Delete")').click();

  await expect (page.locator('text=Delete option?')).toBeEnabled();

  await page.locator('button:has-text("OK") >> nth=2').click();

  await expect (page.locator('text=Option deleted')).toBeVisible();


});


test('Production monitor' , async ({ page }) => {

  await page.locator('li[role="menuitem"]:has-text("Operation")').click();

 // Click text=Production monitor
 await page.locator('text=Production monitor').click();
 await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/operation/production-monitor/FACTORY');
 // Click text=15
 await page.locator('text=15').click();
 // Click text=November 15, 2022
 await page.locator('text=November 15, 2022').click();
 // Click text=1/19 Orders5%
 await page.locator('text=1/19 Orders5%').click();
 // Click text=#00584 (MAIN)0/19#00586 (MAIN)0/11#00579 (MAIN)0/7#00566 (MAIN)0/6#00580 (MAIN)0
 await page.locator('text=#00584 (MAIN)0/19#00586 (MAIN)0/11#00579 (MAIN)0/7#00566 (MAIN)0/6#00580 (MAIN)0').click();
 // Click text=4/80 Dry cleaning5%
 await page.locator('text=4/80 Dry cleaning5%').click();
 // Click text=Vest (0/6)#00584Suit(0/6)#00584Windbreaker(0/6)#00566Vest (0/6)#00580Vest (0/6)#
 await page.locator('text=Vest (0/6)#00584Suit(0/6)#00584Windbreaker(0/6)#00566Vest (0/6)#00580Vest (0/6)#').click();
 // Click text=#00574 (MAIN) >> nth=1
 await page.locator('text=#00574 (MAIN)').nth(1).click();
 // Click text=#00574 (MAIN)Ruiqi >> [aria-label="Close"]
 await page.locator('text=#00574 (MAIN)Ruiqi >> [aria-label="Close"]').click();
 // Click text=0/14 Wash0%
 await page.locator('text=0/14 Wash0%').click();
 // Click text=Suit(0/6)#00584Vest (0/4)#00579Vest (0/3)#00586Vest (0/1)#00584
 await page.locator('text=Suit(0/6)#00584Vest (0/4)#00579Vest (0/3)#00586Vest (0/1)#00584').click();
 // Click text=0/9 Ironing0%
 await page.locator('text=0/9 Ironing0%').click();
 // Click text=T-Shirt/Polo Shirt(0/5)#00586T-Shirt/Polo Shirt(0/4)#00587
 await page.locator('text=T-Shirt/Polo Shirt(0/5)#00586T-Shirt/Polo Shirt(0/4)#00587').click();
 // Click text=0/62 Vest 0%
 await page.locator('text=0/62 Vest 0%').click();
 // Click text=Dry cleaning(0/6)#00584Dry cleaning(0/6)#00580Dry cleaning(0/6)#00588Dry cleanin
 await page.locator('text=Dry cleaning(0/6)#00584Dry cleaning(0/6)#00580Dry cleaning(0/6)#00588Dry cleanin').click();
 // Click text=#00586 (MAIN)Ruiqi >> [aria-label="Close"]
 await page.locator('text=#00586 (MAIN)Ruiqi >> [aria-label="Close"]').click();
 // Click text=0/12 Suit0%
 await page.locator('text=0/12 Suit0%').click();
 // Click text=Dry cleaning(0/6)#00584Wash(0/6)#00584
 await page.locator('text=Dry cleaning(0/6)#00584Wash(0/6)#00584').click();
 // Click text=#00584 (MAIN)test >> [aria-label="Close"]
 await page.locator('text=#00584 (MAIN)test >> [aria-label="Close"]').click();
 // Click text=4/15 Windbreaker26%
 await page.locator('text=4/15 Windbreaker26%').click();
 // Click text=Dry cleaning(0/6)#00566Dry cleaning(0/5)#00565Dry cleaning x 4#00563
 await page.locator('text=Dry cleaning(0/6)#00566Dry cleaning(0/5)#00565Dry cleaning x 4#00563').click();


});

});
