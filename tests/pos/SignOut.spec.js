import { expect, test } from '@playwright/test';
import clockIn from './clockIn';

test.beforeEach(clockIn);

  test('Sign out', async ({ page }) => {
    
  await page.locator('button:has-text("POINT")').click();

  await page.locator('button:has-text("Sign out store")').click();

  await expect(page.locator('text=Sign out?')).toBeEnabled();

  await page.locator('button:has-text("Sign out")').nth(1).click();

  await expect(page.locator('text=Your account have been logged out')).toBeVisible();
  });



  