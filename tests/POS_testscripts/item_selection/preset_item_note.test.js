import { test, expect } from '@playwright/test';
// preset  item note
test('test', async ({ page }) => {
const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
await page.goto(response.url);
await page.getByText('Sweater').click();
await page.getByRole('heading', { name: 'Laundry' }).getByRole('button', { name: 'plus' }).click();
await page.getByRole('button', { name: 'Line item details' }).click();
await page.getByRole('button', { name: 'Hi2' }).click();
const locator = page.getByText('* Hi2');
await expect(locator).toBeTruthy();
await page.getByPlaceholder('Search customer, order').click();
await page.getByPlaceholder('Search customer, order').fill('test');
await page.getByText('[1] test +91 98765 53210').click();
await page.getByRole('button', { name: 'Payment' }).click();
await page.getByRole('button', { name: 'cash' }).click();
await page.getByRole('button', { name: 'Create order' }).click();
await expect(page.getByText('** Hi2')).toHaveText;
await page.getByRole('img', { name: 'tag' }).locator('svg').click();
await expect(page.getByText('* Hi2', { exact: true })).toHaveText;
await expect(page.getByText('test Sweater [L] * Hi2')).toHaveText;

});