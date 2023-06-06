
//Acessory
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
  await page.goto(response.url);
  //await page.getByText('Windbreaker').click();
  await page.locator('div').filter({ hasText: /^Windbreaker$/ }).nth(2).click();
    await page.getByRole('button', { name: 'plus' }).click();
  await page.getByRole('button', { name: 'Line item details' }).click();
  await page.getByRole('button', { name: 'Accessory' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Own Hanger0 pcs' }).getByRole('button', { name: 'plus' }).click();
  const locator = page.getByRole('listitem').filter({ hasText: 'Accessory: Own Hanger '});
  await expect(locator).toBeVisible();
});