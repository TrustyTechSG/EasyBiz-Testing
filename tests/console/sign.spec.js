import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Go to https://console.easybizcloud.com/sign-in
  await page.goto('https://console.easybizcloud.com/sign-in');

  // Click [placeholder="email"]
  await page.locator('[placeholder="email"]').click();

  // Fill [placeholder="email"]
  await page.locator('[placeholder="email"]').fill(process.env.USERNAME);

  // Click [placeholder="Password"]
  await page.locator('[placeholder="Password"]').click();

  // Fill [placeholder="Password"]
  await page.locator('[placeholder="Password"]').fill(process.env.PASSWORD);

  // Click text=EmailPasswordForgot your password?Sign in >> button
  await page.locator('text=EmailPasswordForgot your password?Sign in >> button').click();
  await expect(page).toHaveURL('https://console.easybizcloud.com/dashboard');

  // Click button:has-text("OK")
  await page.locator('button:has-text("OK")').click();

});