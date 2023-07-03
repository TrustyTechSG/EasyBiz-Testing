import { test, expect } from '@playwright/test';
//refrence
test('test', async ({ page }) => {
const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
await page.goto(response.url);
await page.getByPlaceholder('Search customer, order').click();
await page.getByPlaceholder('Search customer, order').fill('1');
await page.getByText('[1] test ').click();
await page.getByText('Leather Jacket').click();
await page.getByRole('button', { name: 'plus', exact: true }).click();
await page.getByRole('button', { name: 'Payment' }).click();
await page.getByRole('button', { name: 'cheque' }).click();
await page.getByRole('button', { name: 'Create order' }).click();
await expect(page.getByText('Pay by cheque')).toBeTruthy();
});