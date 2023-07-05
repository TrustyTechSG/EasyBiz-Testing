import { test, expect } from '@playwright/test';
//gift points
test('test', async ({ page }) => {
  const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
  await page.goto(response.url);
await page.getByPlaceholder('Search customer, order').click();
await page.getByPlaceholder('Search customer, order').fill('test');
await page.getByText('test +91 98765 53210').click();
await page.getByRole('tab', { name: 'gift' }).locator('svg').click();
await page.getByRole('button', { name: 'Recycle' }).click();
await page.getByRole('button', { name: '1' }).click();
await page.getByRole('button', { name: 'delivery bag' }).click();
await page.getByRole('button', { name: 'delivery bag' }).click();
await page.getByRole('button', { name: 'Preview' }).click();
await page.getByRole('button', { name: 'OK', exact: true }).click();
await expect(page.getByText('FIRST STORE delivery bag 1 1 ')).toHaveText;
//FIRST STORE delivery bag item count points
});