import { expect, test } from '@playwright/test';
import clockIn from './clockIn';

test.describe.configure({ mode: 'parallel' });


test.describe('Monitor', () => {

  test.beforeEach(clockIn);

  test('Collection monitor',  async ({ page }) => {

  // Click text=9165992999+ >> button >> nth=3
  await page.locator('text=9165992999+ >> button').nth(3).click();
  // Click text=Collection Monitor
  await page.locator('text=Collection Monitor').click();
  // Click [aria-label="Close"]
  await page.locator('[aria-label="Close"]').click();

  });
  
  test('Production monitor', async ({ page }) => {

  // Click text=9165992999+ >> button >> nth=4
  await page.locator('text=9165992999+ >> button').nth(4).click();
  // Click text=Production Monitor (Central Factory)
  await page.locator('text=Production Monitor (POINT)').click();
  // Click text=Switch business agent
  await page.locator('text=Switch business agent').click();
  // Click strong:has-text("Central Factory")
  await page.locator('text=Central Factory').click();
  // Click text=Production Monitor (Central Factory)
  await expect(page.locator('text=Production Monitor (Central Factory )')).toBeEnabled();


  });

});
  