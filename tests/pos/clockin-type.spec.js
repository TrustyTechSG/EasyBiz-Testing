import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Go to https://stagingpos.easybus.app/?token=
  await page.goto(`https://stagingpos.easybus.app/?token=${process.env.MAINTOKEN}`);

  await expect(page.locator('text=Passcode')).toHaveText("Passcode");

  await page.keyboard.type('0098');

  await expect(page.locator('button:has-text("Ruiqi long long name")')).toBeEnabled();
});