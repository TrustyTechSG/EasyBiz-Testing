import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Go to https://stagingpos.easybus.app/?token=
  await page.goto(`https://stagingpos.easybus.app/?token=${process.env.MAINTOKEN}`);

  await expect(page.locator('text=Passcode')).toHaveText("Passcode");

  // Click div[role="dialog"] button:has-text("0")
  await page.locator('div[role="dialog"] button:has-text("0")').click();

  // Click div[role="dialog"] button:has-text("0")
  await page.locator('div[role="dialog"] button:has-text("0")').click();

  // Click button:has-text("9")
  await page.locator('button:has-text("9")').click();

  // Click button:has-text("7")
  await page.locator('button:has-text("7")').click();

  // Click button:has-text("MAIN")
  await expect(page.locator('button:has-text("Ruiqi long long name")')).toBeEnabled();
});