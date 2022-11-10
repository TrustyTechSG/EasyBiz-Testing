import { test, expect } from '@playwright/test';
import clockIn from './clockIn';

test.beforeEach(clockIn);

test('categories', async ({ page }) => {

  await page.locator('text=TOP').click();

  await page.locator('text=T-Shirt/Polo Shirt').click();

  await expect(page.locator('strong:has-text("T-Shirt/Polo Shirt")')).toBeEnabled();

  await page.locator('button:has-text("Close")').click();

  await page.locator('text=BOTTOM').click();

  await page.locator('text=Short Dress').click();

  await page.locator('button:has-text("Close")').click();

  await page.locator('text=LOAD WASH').click();

  await page.locator('text=Load Wash - Per Kg').click();

  await page.locator('text=IroningSGD 5.00Add >> button').click();

  await page.locator('button:has-text("5")').click();

  await page.locator('text=Next').click();

  await page.locator('button:has-text("5")').click();

  await page.locator('text=Add').nth(3).click();

  await expect(page.locator('text=5(5) >> nth=1')).toBeEnabled();

  await page.locator('button:has-text("Close")').click();

  await page.locator('div:nth-child(2) > .ant-space > div > .ant-btn').first().click();

  await page.locator('[placeholder="Search"]').fill('suit');

  await page.locator('text=Suit').nth(1).click();

  await page.locator('.flex > div:nth-child(2) > .ant-space > div:nth-child(2) > .ant-btn').click();

  await page.locator('button:has-text("U")').first().click();

  await page.locator('text=Underpants').click();

  await page.locator('text=Index: UClose >> button').click();

  await expect(page.locator('text=TOP')).toBeEnabled();

  //add other item

  await page.locator('text=TOP').click();

    await page.locator('.ant-card-body > .flex').click();

    await page.locator('[placeholder="Describe your item"]').fill('New item');

    await page.locator('label:has-text("Dry cleaning")').click();

    await page.locator('button:has-text("Update")').click();

    await page.locator('button:has-text("5")').click();

    await page.locator('button:has-text("Update")').nth(1).click();

    await page.locator('button:has-text("Add")').click();
    
    await expect(page.locator('text=#2 New item')).toBeEnabled();








});
