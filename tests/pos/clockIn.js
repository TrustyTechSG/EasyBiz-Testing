import { expect } from '@playwright/test';

export default async ({ page }) => {
  // Runs before each test and signs in each page.
  // Go to https://stagingpos.easybus.app/?token=
  await page.goto(`https://stagingpos.easybus.app/?token=${process.env.MAINTOKEN}`);
  await expect(page.locator('text=Passcode')).toHaveText("Passcode");

  // Click div[role="dialog"] button:has-text("0")
  await page.locator('div[role="dialog"] button:has-text("4")').click();

  // Click div[role="dialog"] button:has-text("0")
  await page.locator('div[role="dialog"] button:has-text("4")').click();

  // Click button:has-text("9")
  await page.locator('div[role="dialog"] button:has-text("4")').click();

  // Click button:has-text("7")
  await page.locator('div[role="dialog"] button:has-text("5")').click();


  //await page.keyboard.type(process.env.STAFF_PASSCODE);

  await expect(page.locator(`button:has-text("${process.env.STAFF_NAME}")`)).toBeEnabled();
}