import { test, expect } from '@playwright/test';
//refrence
test('test', async ({ page }) => {
const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
await page.goto(response.url);
await page.getByPlaceholder('Search customer, order').click();
await page.getByPlaceholder('Search customer, order').fill('test');
await page.getByText('[1] test ').click();
await page.getByText('Leather Jacket').click();
await page.getByRole('button', { name: 'plus', exact: true }).click();
await page.getByRole('button', { name: 'Payment' }).click();
await page.getByRole('button', { name: 'cheque' }).click();
await page.getByRole('button', { name: 'Create order' }).click();
await page.getByRole('img', { name: 'file-text' }).locator('svg').click();
await expect(page.getByText('Customer name test')).toBeVisible();
await expect(page.getByText('Customer tel +91 98765 53210')).toBeVisible();
await expect(page.getByText('Pay by cheque')).toBeVisible();
});