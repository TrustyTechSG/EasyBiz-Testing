import { expect } from '@playwright/test';

export default async ({ page }) => {
  // Runs before each test and signs in each page.
  // Go to https://stagingpos.easybus.app/?token=
  await page.goto('https://stagingconsole.easybus.app/');

    await expect(page.locator('text=Welcome.')).toHaveText("Welcome.");

    await page.locator('[placeholder="email"]').click();
    // Fill [placeholder="email"]
    await page.locator('[placeholder="email"]').fill(`${process.env.EMAIL}`);
    // Click [placeholder="Password"]
    await page.locator('[placeholder="Password"]').click();
    // Fill [placeholder="Password"]
    await page.locator('[placeholder="Password"]').fill(`${process.env.PASSWORD}`);
    // Click text=EmailPasswordForgot your password?Sign in >> button
    await page.locator('text=EmailPasswordForgot your password?Sign in >> button').click();

    await expect(page).toHaveURL('https://stagingconsole.easybus.app/dashboard');
    // Click text=Welcome Juanhong
    //await page.locator('text=Welcome Juanhong').click();


    if (page.locator('text=Admin Console'));
    await page.locator('[aria-label="Close"]').click();

}

