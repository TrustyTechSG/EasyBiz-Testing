import { expect, test } from '@playwright/test';
import clockIn from './clockIn';

test.describe.configure({ mode: 'parallel' });


test.describe('Label', () => {

  test.beforeEach(clockIn);

  test('Update label note', async ({ page }) => {

  await page.locator('div:nth-child(2) > div:nth-child(2) > .ant-btn').first().click();

  await page.locator('div[role="tablist"] div:has-text("Keyboard search")').nth(2).click();

  await page.locator('[placeholder="Order \\& line items"]').fill('02038');

  await page.locator('text=02038').click();

  await expect(page.locator('text=#02038 (POINT)')).toBeVisible();

  await page.locator('button:has-text("Label")').click();

  await page.locator('.ant-space > div:nth-child(3) > .ant-space > div > .ant-btn').first().click();

  await page.locator('button:has-text("Bh")').click();

  await page.locator('button:has-text("Update")').click();

  await expect (page.locator('button:has-text("Label")')).toBeEnabled();

  await expect(page.locator('strong:has-text("Bh")')).toBeEnabled();

  });

  test('Update All label note', async({page}) => {
    
  await page.locator('div:nth-child(2) > div:nth-child(2) > .ant-btn').first().click();

  await page.locator('div[role="tablist"] div:has-text("Keyboard search")').nth(2).click();

  await page.locator('[placeholder="Order \\& line items"]').fill('02038');

  await page.locator('text=02038').click();

  await expect(page.locator('text=#02038 (POINT)')).toBeVisible();

  await page.locator('button:has-text("Label")').click();

  await page.locator('button:has-text("Note")').click();

  await expect (page.locator('text=Update Note For All Labels')).toBeEnabled();

  await page.locator('text=Update Note For All LabelsUpdateTestjjkkkAnother\'sVgvgBhHhTest >> textarea').click();

  await page.locator('text=Update Note For All LabelsUpdateTestjjkkkAnother\'sVgvgBhHhTest >> textarea').fill('test label note');

  await page.locator('button:has-text("Update")').click();

  await expect (page.locator('button:has-text("Label")')).toBeEnabled();

  expect (page.locator('strong:has-text("test label note" >> nth=1')).toBeEnabled();


// Click .ant-space-item > .ant-space > div:nth-child(2) > .ant-typography > strong >> nth=0
  //await page.locator('.ant-space-item > .ant-space > div:nth-child(2) > .ant-typography > strong').first().toHaveText(/test label note/);

  
  });

});