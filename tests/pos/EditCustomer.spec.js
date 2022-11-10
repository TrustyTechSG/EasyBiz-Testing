import { expect, test } from '@playwright/test';
import clockIn from './clockIn';

test.describe.configure({ mode: 'parallel' });


test.describe('EditAccount', () => {

  test.beforeEach(clockIn);

  test('Update account name', async ({ page }) => {

    const name = 'Test New Name';
    
   
    await page.locator('[placeholder="Search customer"]').click();
   
    await page.locator('[placeholder="Search customer"]').fill('7498');
   
    await page.locator('text=[7498]').click();
   
    await page.locator('div:nth-child(3) > div > div > .flex > .ant-space > div > .ant-btn').first().click();
   
    await page.locator('text=Profile0PointsRecycle >> button').first().click();
   
    await page.locator('input[type="text"]').first().click();
   
    await page.locator('input[type="text"]').first().fill(`${name}`);
   
    await page.locator('button:has-text("Update account")').click();
   
    await page.locator(`text=${name}`).nth(1).click();

  //Check account history

    await page.locator('text=Profile0PointsRecycle >> button').nth(1).click();
    
    await expect(page.locator('text=Account History')).toBeEnabled();

  });

});