//Acessory
import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
  await page.goto(response.url);
  await page.locator('div').filter({ hasText: /^Windbreaker$/ }).nth(2).click();
  await page.getByRole('heading', { name: 'Laundry ₹10.00 minus 0 pcs plus' }).getByRole('button', { name: 'plus' }).click();  
  await page.getByRole('button', { name: 'Line item details' }).click();
  await page.getByRole('button', { name: 'Accessory' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Own Hanger0 pcs' }).getByRole('button', { name: 'plus' }).click();
  await expect(page.getByRole('listitem').filter({ hasText: 'Accessory: Own Hanger '})).toBeVisible();
  await expect(page.getByRole('listitem').filter({ hasText: '#1 Windbreaker₹10.00x1 pcs₹10.00Laundry' })).toBeVisible();
});