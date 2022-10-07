import { test, expect } from '@playwright/test';
import clockIn from './clockIn';

test.beforeEach(clockIn);

test('test', async ({ page }) => {

  // Click #new-customer
  await page.locator('#new-customer').click();

 // Click name
 await page.locator('input[type="text"]').nth(1).fill('tester123');

  // Click button:has-text("Create account")
  await page.locator('button:has-text("Create account")').click();







});
