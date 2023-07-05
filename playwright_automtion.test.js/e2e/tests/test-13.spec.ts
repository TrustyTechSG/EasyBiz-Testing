import { test, expect } from '@playwright/test';
//Add other item
test('test', async ({ page }) => {
  const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
  await page.goto(response.url);
await page.getByText('Other').click();
await page.getByPlaceholder('Describe your item').fill('net');
await page.getByRole('button', { name: '₹0.00' }).click();
await page.getByRole('button', { name: '1', exact: true }).click();
await page.getByRole('button', { name: '1', exact: true }).click();
await page.getByRole('button', { name: 'Update' }).click();
await page.getByText('Laundry').click();
await page.getByRole('button', { name: 'Add to order' }).click();
await page.getByRole('button', { name: 'Payment' }).click();
await page.getByPlaceholder('Search customer, order').click();
await page.getByPlaceholder('Search customer, order').fill('abc');
await page.getByText('[15]').click();
await page.getByRole('button', { name: 'Payment' }).click();
await page.getByRole('button', { name: 'Cash' }).click();
await page.getByRole('button', { name: 'Create order' }).click();
const locator = page.getByText('net₹11.00x1');
await expect(locator).toBeTruthy();
});