import { expect, test } from '@playwright/test';
import clockIn from './clockIn';

test.describe.configure({ mode: 'parallel' });


test.describe('Search order', () => {

  test.beforeEach(clockIn);

  test('Keyboard search', async ({ page }) => {
    
  await page.locator('div:nth-child(2) > div:nth-child(2) > .ant-btn').first().click();

  await page.locator('div[role="tablist"] div:has-text("Keyboard search")').nth(2).click();

  await page.locator('[placeholder="Order \\& line items"]').fill('01577');

  await page.locator('text=01577').click();

  await expect(page.locator('text=#01577 (POINT)')).toBeVisible();

  });

  test('Quick search',  async ({ page }) => {

  await page.locator('div:nth-child(2) > div:nth-child(2) > .ant-btn').first().click();

  await page.locator('div[role="tablist"] div:has-text("Quick Search")').nth(2).click();

  await page.locator('div[role="tabpanel"] button:has-text("0")').click();

  await page.locator('div[role="tabpanel"] button:has-text("1")').click();

  await page.locator('button:has-text("5")').click();

  await page.locator('button:has-text("7")').click();

  await page.locator('button:has-text("7")').click();
  
  await page.locator('button:has-text("Find")').click();

  await expect(page.locator('text=#01577 (POINT)')).toBeVisible();

  });
  
  test('Swap search button', async ({ page }) => {

  await page.locator('div:nth-child(2) > div:nth-child(2) > .ant-btn').first().click();

  const arrangement = page.locator('text=Keyboard searchQuick Search');

  await page.locator('div[role="tablist"] button').nth(1).click();

  expect(page.locator(arrangement)).toBeEnabled;

  if (page.locator('text=Quick SearchKeyboard search'));

  await page.locator('div[role="tablist"] button').nth(1).click();

  expect(page.locator(arrangement)).toBeEnabled;

  });

  test('Outstanding order', async ({ page }) => {

  await page.locator('div:nth-child(2) > div:nth-child(2) > .ant-btn').click();

  await page.locator('button:has-text("Outstanding orders")').click();

  await expect(page.locator('text=Outstanding orders >> nth=1')).toBeEnabled();
  
  });
  

});
  