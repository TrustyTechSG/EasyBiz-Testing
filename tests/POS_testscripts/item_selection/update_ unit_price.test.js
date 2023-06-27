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
expect(page.getByRole('button', { name: 'Update' })).toBeEnabled();
await page.getByRole('button', { name: 'Update' }).click();
expect(page.getByRole('button', { name: '₹9.00' })).toBeTruthy();
expect(page.getByText('#1 T-Shirt₹9.00x1 pcs₹9.00Laundry')).toBeTruthy();
await page.getByPlaceholder('Search customer, order').click();
await page.getByPlaceholder('Search customer, order').fill('test');
await page.getByText('[1] test +91 98765 53210').click();
await page.getByRole('button', { name: 'Payment' }).click();
await page.getByRole('button', { name: 'cash' }).click();
await page.getByRole('button', { name: 'Create order' }).click();
expect(page.getByText('T-Shirt ₹ 9.00 x 1/pcs ₹ 9.00')).toBeTruthy();
await expect(page.getByText('Customer name: test')).toBeVisible();
expect(page.getByText('Customer tel: +91 98765 53210')).toBeTruthy();
});