// update unit price
import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
await page.goto(response.url);
await page.getByText('T-Shirt').click();
await page.getByRole('heading', { name: 'Laundry' }).getByRole('button', { name: 'plus' }).click();
await page.getByRole('button', { name: '₹6.00' }).click();
await page.getByRole('button', { name: 'arrow-left' }).click();
await page.getByRole('button', { name: '9', exact: true }).click();
await expect(page.getByRole('button', { name: 'Update' })).toBeEnabled();
await page.getByRole('button', { name: 'Update' }).click();
await expect(page.getByRole('button', { name: '₹9.00' })).toBeVisible();
await expect(page.getByText('#1 T-Shirt₹9.00x1 pcs₹9.00Laundry')).toBeVisible();
await page.getByPlaceholder('Search customer, order').click();
await page.getByPlaceholder('Search customer, order').fill('test');
await page.getByText('[1] test +91 98765 53210').click();
await page.getByRole('button', { name: 'Payment' }).click();
await page.getByRole('button', { name: 'cash' }).click();
await page.getByRole('button', { name: 'Create order' }).click();
await page.getByRole('tab', { name: 'Internal receipt' }).click();
await page.getByRole('heading', { name: '(PAID)' }).click();
await page.getByRole('tab', { name: 'Customer receipt' }).click();
await expect(page.getByText('Pay by Cash (₹ 10.20)')).toBeVisible();
await expect(page.getByText('Customer name test')).toBeVisible();
await expect(page.getByText('Customer tel +91 98765 53210')).toBeVisible();
});