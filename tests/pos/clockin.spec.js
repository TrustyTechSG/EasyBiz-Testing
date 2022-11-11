import { expect, test } from '@playwright/test';
import clockIn from './clockIn';

test.describe('Clock in', () => {
  test('by click', async ({ page }) => {
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

    // Click button:has-text("MAIN")
    await expect(page.locator(`button:has-text("${process.env.STAFF_NAME}")`)).toBeEnabled();

    //Check clock out

    await page.locator(`button:has-text("${process.env.STAFF_NAME}")`).click();

    await page.locator('button:has-text("Clock out")').click();

    await expect (page.locator('text=Passcode')).toBeEnabled();
  });

  test('by keyboard', clockIn);

});