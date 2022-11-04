import { expect, test } from '@playwright/test';
import { globalTimeout } from '../../playwright.config';
import clockIn from './clockIn';

test.describe.configure({ mode: 'parallel' });


test.describe('Handover', () => {

  test.beforeEach(clockIn);

  test('Pending Agent pick up', async ({ page }) => {

    await page.locator('text=9164691999+ >> button').nth(1).click();

   await page.locator('button:has-text("History")').click();

   await page.locator('text=History2022NovMonthYearSuMoTuWeThFrSa3031010203040506070809101112131415161718192 >> [aria-label="Close"]').click();

   await expect(page.locator('text=Pending Agent Pick-up')).toBeEnabled();
  
   await page.locator('text=Laundry & Dry Clean').click();

   await page.locator('input[type="checkbox"] >> nth=8').click();

   await page.locator('button:has-text("Send out 1 orders")').click();

   await expect(page.locator('text=Handover Receipt')).toBeEnabled();
 

  });

  test('Pending Agent Delivery',  async ({ page }) => {

    await page.locator('text=9164592999+ >> button').nth(2).click();

    await page.locator('button:has-text("History")').click();

    await page.locator('text=History2022NovMonthYearSuMoTuWeThFrSa3031010203040506070809101112131415161718192 >> [aria-label="Close"]').click();
  
    await expect(page.locator('text=Pending Agent Delivery')).toBeEnabled();

    await page.locator('input[type="checkbox"] >> nth=8').check();

    await page.locator('button:has-text("Received 1 orders")').click();

    await expect(page.locator('text=Handover Receipt')).toBeEnabled();
    
  
  });
  

});
  
  
  
 