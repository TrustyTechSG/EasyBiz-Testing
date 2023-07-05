import { test, expect } from '@playwright/test';
//update- notification 
test('test', async ({ page }) => {
  const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
  await page.goto(response.url)
await page.getByRole('button', { name: 'shop FIRST STORE' }).click();
await page.getByRole('button', { name: 'POS v3.0.20' }).click();
await expect(page.getByText('Your Cloud POS is up to date')).toHaveText;
});