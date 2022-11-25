import { test, expect } from '@playwright/test';
import SignIn from './SignIn';

test.beforeEach(SignIn);
test.describe('Online Tab', () => {

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

 test('Sales', async ({ page }) => {
  

    await page.locator('li[role="menuitem"]:has-text("App")').click();
    await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/app/sales');
    // Click li[role="menuitem"]:has-text("Sales")
    await page.locator('li[role="menuitem"]:has-text("Sales")').click();
    
      // Click text=2022-10
    await page.locator('text=2022-10').click();
    // Click text=Total SGD 841.60
    expect (page.locator('text=Total SGD 841.60')).toBeEnabled();

    await page.locator('text=App V22121SGD 598.80SGD 38.0494.91% >> [aria-label="Expand row"]').click();

    await page.locator('#rc-tabs-8-panel-2022-10 >> text=admin').click();
    // Click text=admin >> nth=3
    await expect (page.locator('text=admin >> nth=3')).toBeEnabled();

    await page.locator('text=adminSGD0.0001/10/2022 to 31/10/2022 (Total 31 days)Download order list (31 days >> [aria-label="Close"]').click();

    await page.locator('text=website').click();
    // Click text=website >> nth=1
    await (page.locator('text=website >> nth=1')).toBeEnabled();

    await page.locator('text=websiteSGD0.0001/10/2022 to 31/10/2022 (Total 31 days)Download order list (31 da >> [aria-label="Close"]').click();

    await page.locator('#rc-tabs-8-panel-2022-10 >> text=recurring').click();
    // Click text=recurring >> nth=2
    await (page.locator('text=recurring >> nth=2')).toBeEnabled();
    // Click text=recurringSGD0.0001/10/2022 to 31/10/2022 (Total 31 days)Download order list (31  >> [aria-label="Close"]
    await page.locator('text=recurringSGD0.0001/10/2022 to 31/10/2022 (Total 31 days)Download order list (31  >> [aria-label="Close"]').click();


 });

  test('Daily orders', async ({page}) => {
    await page.locator('#eb-dashboard-top li[role="menuitem"]:has-text("App")').click();
    await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/app/sales');

      // Click text=Daily orders
    await page.locator('text=Daily orders').click();
    await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/app/daily-sales');
    expect (page.locator('text=Daily OrdersLive page')).toBeEnabled();

    await page.locator('[placeholder="Start month"]').click();

    await page.locator('text=Aug').first().click();

    await page.locator('text=Sep').first().click();

    await page.locator('text=30/09').click();

    await page.locator('text=00443').click();

    await expect (page.locator('text=#00443 (App V2)')).toBeEnabled();

    await page.locator('text=#00443 (App V2)XXXX >> [aria-label="Close"]').click();

    await page.locator('text=29/09').click();

    await page.locator('text=00430').click();

    await expect (page.locator('text=#00430 (App V2)')).toBeEnabled();

    await page.locator('text=#00430 (App V2)te >> [aria-label="Close"]').click();

    await page.locator('text=23/09').click();

    await page.locator('text=00364').click();

    await expect (page.locator('text=#00364 (App V2)')).toBeEnabled();


  });

  test('Daily Active User' , async ({ page }) => {

    await page.locator('#eb-dashboard-top li[role="menuitem"]:has-text("App")').click();

    await page.locator('text=Daily active user').click();
    await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/app/active-user');

    await page.locator('[placeholder="Start date"]').click();

    await page.locator('text=17 >> nth=1').click();

    await page.locator('text=17 >> nth=2').click();

    await page.locator('text=KENN').click();

    await page.locator('text=[7288] KENN +65 8512 5551').click();

    await page.locator('text=[7288] KENN +65 8512 5551ProfileOrder historyPayment historyInvoicingOnlineAddre >> [aria-label="Close"]').click();

    await expect (page.locator('text=account')).toBeEnabled();


  });

  test('Leads' , async ({ page }) => {

    await page.locator('#eb-dashboard-top li[role="menuitem"]:has-text("App")').click();

    await page.locator('text=Leads').click();
    await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/app/leads');

    await page.locator('text=8 hours agoKENN | +65 8512 5551 | juanhong@easybizcloud.comNew booking page (LAU >> button').first().click();

    await expect (page.locator('text=Customer activity')).toBeEnabled();

    await page.locator('text=Customer activityStore/AppVisit PageDate/Timeweb1New booking page22 Nov 2022 08: >> [aria-label="Close"]').click();

    await page.locator('text=7 hours agoKENN | +65 8512 5551 | juanhong@easybizcloud.comNew booking page (LAU >> button >> nth=1').click();

    await expect (page.locator('li:has-text("KENN Websitenone | none | Mac OS | 10.15.7 | Chrome")')).toBeEnabled();

    await page.locator('text=8 hours agoKENN | +65 8512 5551 | juanhong@easybizcloud.comNew booking page (LAU >> button >> nth=2').click();

    await expect (page.locator('text=[7288] KENN +65 8512 5551')).toBeEnabled();

    await page.locator('text=[7288] KENN +65 8512 5551ProfileOrder historyPayment historyInvoicingOnlineAddre >> [aria-label="Close"]').click();

});

 test('Live Chat' , async ({ page }) => {

  await page.locator('#eb-dashboard-top li[role="menuitem"]:has-text("App")').click();

    await page.locator('text=Live chat').click();
    await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/app/livechat');

    await expect (page.locator('text=Live Chat >> nth=1')).toBeEnabled();


  });

  test('Referral' , async ({ page }) => {

    await page.locator('#eb-dashboard-top li[role="menuitem"]:has-text("App")').click();

    await page.locator('text=Referral').click();
    await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/app/referrals');

    await expect (page.locator('text=Referral Program')).toBeEnabled();

});

 test('Recurrings' , async ({ page }) => {

  await page.locator('#eb-dashboard-top li[role="menuitem"]:has-text("App")').click();

  await page.locator('text=Recurring').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/app/recurrings');

  await expect (page.locator('text=Recurring >> nth=1')).toBeEnabled();

  await page.locator('text=App V2Laundry & Dry Clean[7373] Tann +65 9074 5780139 Tyrwhitt Rd, Singapore 207 >> button >> nth=2').click();

  await page.locator('text=Pause recurring').click();

  await page.locator('button:has-text("Pause")').click();

  await page.locator('[placeholder="Search"]').click();
  // Fill [placeholder="Search"]
  await page.locator('[placeholder="Search"]').fill('7373');

  await page.waitForTimeout(3000);

  // Click text=Paused
  await expect (page.locator('text=Paused')).toBeEnabled();



});

test('New order' , async ({ page }) => {

  await page.locator('#eb-dashboard-top li[role="menuitem"]:has-text("App")').click();

  await page.locator('text=New order').click();
 
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/app/new');

  await page.locator('.ant-select-selector').first().click();

  await page.locator('text=App V2').nth(1).click();

  await page.locator('text=Search customerNew customer >> input[role="combobox"]').click();

  await page.locator('text=[7514]').click();

  await page.locator('button:has-text("Preview new order")').click();

  await page.locator('text=PickupPending scheduleSchedule >> button').click();

  await page.locator('button:has-text("20:00~22:00")').first().click();

  await page.locator('button:has-text("OK")').nth(1).click();

  await page.locator('button:has-text("Create order")').click();

  await expect (page.locator('div[role="separator"] >> text=Receipt')).toBeEnabled();

  


});

test('Search' , async ({ page }) => {

  await page.locator('#eb-dashboard-top li[role="menuitem"]:has-text("App")').click();

  await page.locator('main ul[role="menu"] >> text=Search').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/app/orders');

  await page.locator('[placeholder="Search"]').click();

  await page.locator('[placeholder="Search"]').fill('00500');

  await page.locator('text=#00500').click();

  await expect (page.locator('text=#00500 (App V2)')).toBeEnabled();

  await page.locator('text=#00500 (App V2)testt >> [aria-label="Close"]').click();

  await page.locator('button:has-text("Export")').click();

  await page.locator('text=ExportOrder date rangeOrder status Select order statusFrom Store/AppAllStores on >> [aria-label="Close"]').click();

   await expect (page.locator('text=Export >> nth=1')).toBeHidden();

   await page.locator('button:has-text("Export")').click();

  await page.locator('[placeholder="Start date"]').click();

  await page.locator('.ant-picker-panels > div > .ant-picker-date-panel > .ant-picker-body > .ant-picker-content > tbody > tr > td:nth-child(3) > .ant-picker-cell-inner').first().click();

  await page.locator('.ant-picker-panels > div > .ant-picker-date-panel > .ant-picker-body > .ant-picker-content > tbody > tr:nth-child(5) > td:nth-child(4) > .ant-picker-cell-inner').first().click();

  await page.locator('text=From customerSearch customer >> input[role="combobox"]').click();

  await page.locator('text=From customerSearch customer >> input[role="combobox"]').fill('7059');

  await page.locator('text=[7059]').click();

  const [page1] = await Promise.all([
      page.waitForEvent('popup'),
      page.waitForEvent('download'),
      page.locator('button:has-text("Start export")').click()
    ]);



});

test('Calendar' , async ({ page }) => {

  await page.locator('#eb-dashboard-top li[role="menuitem"]:has-text("App")').click();

  await page.locator('text=Calendar').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/app/calendar');

  //await page.locator('#root div:has-text("Nov")').nth(4).click();

  //await page.locator('text=Dec').click();

  //await page.locator('text=DecDec >> div').click();
  // Click text=Nov
  //await page.locator('text=Nov').click();

  await page.locator('text=01SGD 50.00SGD 50.002 orders >> div').first().click();

  await page.locator('text=1st Nov 2022').click();

  await page.locator('div[role="tablist"] div:has-text("App V2 (SGD 50.00)")').nth(2).click();

  await page.locator('div[role="tablist"] div:has-text("App v1 (SGD 0.00)")').nth(2).click();

  await expect (page.locator('h2:has-text("App v1")')).toBeEnabled();

  await page.locator('text=1st Nov 2022DownloadPrintSALES REPORT App v1 01/11/2022 Report time 09:13 25/11/ >> [aria-label="Close"]').click();

  await expect (page.locator('text=1st Nov 2022')).toBeDisabled();

});





});




