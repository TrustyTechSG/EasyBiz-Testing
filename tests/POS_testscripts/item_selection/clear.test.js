import { test, expect } from '@playwright/test';
//clear
test('test', async ({ page }) => {
  const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
  await page.goto(response.url)
  await page.getByText('T-Shirt').click();
  await page.getByRole('heading', { name: 'Ironing' }).getByRole('button', { name: 'plus' }).click();
  await page.getByRole('heading', { name: 'Ironing' }).getByRole('button', { name: 'plus' }).click();
  await page.getByRole('button', { name: 'credit-card Payment' }).click();
  await page.getByPlaceholder('Search customer, order').click();
  await page.getByPlaceholder('Search customer, order').fill('test');
  await page.getByText('[1] test').click();
  await page.getByRole('button', { name: 'delete Clear' }).click();
  await page.getByRole('button', { name: 'OK', exact: true }).click();
  await expect(page.getByText('New order cleared')).toBeVisible();
})