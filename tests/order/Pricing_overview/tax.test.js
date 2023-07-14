import { test, expect } from '@playwright/test';
//tax
test('test', async ({ page }) => {
const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
await page.goto(response.url);
await page.getByText('Sweater').click();
await page.getByRole('heading', { name: 'Dry Clean' }).getByRole('button', { name: 'plus' }).click();
await page.getByPlaceholder('Search customer, order').click();
await page.getByPlaceholder('Search customer, order').fill('test');
await page.getByText('[1] test +91 98765 53210').click();
await page.getByRole('button', { name: 'Payment' }).click();
await page.getByRole('button', { name: 'cash' }).click();
await page.getByRole('button', { name: 'Create order' }).click();
await page.getByRole('tab', { name: 'Customer receipt' }).click();
await expect(page.getByText('Customer name test')).toBeVisible();
await expect(page.getByText('Customer tel +91 98765 53210')).toBeVisible();
await expect(page.getByText('Sweater ₹ 8.00 x 1/pcs ₹ 8.00')).toBeVisible();
await expect(page.getByText('- Dry Clean')).toBeVisible();
await expect(page.getByText('Subtotal 1/pcs ₹ 10.00')).toBeVisible();
});