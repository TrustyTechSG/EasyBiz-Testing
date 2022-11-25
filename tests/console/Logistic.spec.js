import { test, expect } from '@playwright/test';
import SignIn from './SignIn';

test.beforeEach(SignIn);

test.describe('Logistic test' , () => {

test('Logistic', async ({ page }) => {

  await page.locator('li[role="menuitem"]:has-text("Logistic")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/logistic/dashboard');

  await page.locator('li[role="menuitem"]:has-text("Dashboard")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/logistic/dashboard');
  expect (page.locator('text=Daily Jobs')).toBeEnabled();  

  await page.locator('li[role="menuitem"]:has-text("Overview")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/logistic/overview');
  expect(page.locator('text=Overview >> nth=1')).toBeEnabled();

  await page.locator('li[role="menuitem"]:has-text("Worktime")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/logistic/worktime');
  expect(page.locator('text=Worktime: ')).toBeEnabled();
  
  await page.locator('li[role="menuitem"]:has-text("Map View")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/logistic/map');
  //expect(page.locator('[aria-label="Map"] div:has-text("To navigate, press the arrow keys.")')).toBeVisible();

  await page.locator('text=CalendarJob historyTrip records >> [aria-label="calendar"] svg').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/logistic/calendar');
  expect(page.locator('text=Calendar >> nth=1')).toBeEnabled();

  await page.locator('li[role="menuitem"]:has-text("Job history")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/logistic/jobs');
  expect(page.locator('text=Job History >> nth=1')).toBeEnabled();

  await page.locator('li[role="menuitem"]:has-text("Trip records")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/logistic/trips');
  expect(page.locator('text=Schedule time')).toBeEnabled();


});

test('Dashboard', async ({ page }) => {

  await page.locator('li[role="menuitem"]:has-text("Logistic")').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/logistic/dashboard');

  await page.locator('[aria-label="car"] path').click();
  await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard/logistic/dashboard');

  await page.locator('[placeholder="Start date"]').click();

  await page.locator('td:nth-child(3) > .ant-picker-cell-inner').first().click();

  await page.locator('tr:nth-child(5) > td:nth-child(4) > .ant-picker-cell-inner').first().click();

  await page.locator('text=24/11').click();

  await page.locator('text=#00458').click();

  await expect (page.locator('text=#00458 (App V2)')).toBeEnabled();

  expect (page.locator('div[role="separator"] >> text=Logistic')).toBeEnabled();

  expect (page.locator('text=24/11/2022 (Thursday)')).toBeVisible();

  await page.locator('text=#00458 (App V2)Tann >> [aria-label="Close"]').click();

  expect (page.locator('text=#00458 (App V2)')).toBeDisabled();


});

});