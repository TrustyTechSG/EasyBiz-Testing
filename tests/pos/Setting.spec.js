//For POS basic setting reaction checking

import { test, expect } from '@playwright/test';
import clockIn from './clockIn';

test.beforeEach(clockIn);

test('Setting', async ({ page }) => {

  await page.locator('button:has-text("POINT")').click();

  await page.locator('button:has-text("Receipt printer")').click();

  await page.locator('button:has-text("Label printer")').click();

  await page.locator('button:has-text("Auto printing")').click();

  await expect(page.locator('text=Auto Printing >> nth=1')).toBeEnabled();

  await page.locator('text=Auto PrintingAutomatically print customer receipts after new order createdx1Auto >> [aria-label="Close"]').click();

  await page.locator('button:has-text("Print") >> nth=3').click();

  await expect(page.locator('span:has-text("Print") >> nth=4')).toBeEnabled();

  await page.locator('text=PrintPrint QR bag labelPrint storage labelCancelClose >> [aria-label="Close"]').click();

  await page.locator('button:has-text("Mobile sign in")').click();

  await expect(page.locator('text=Device Sign In')).toBeEnabled();

  await page.locator('text=Device Sign InUse EB App or customer tablet devices to scan the QR code below fo >> [aria-label="Close"]').click();

  await page.locator('button:has-text("Articles")').click();

  await expect(page.locator('text=Articles >> nth=1')).toBeEnabled();

  await page.locator('text=ArticlesNo Data >> [aria-label="Close"]').click();

  await page.locator('button:has-text("Language")').click();

  await expect(page.locator('text=System Language')).toBeEnabled();

  await page.locator('text=System LanguageEnglish简体中文CancelOK >> [aria-label="Close"]').click();








});
