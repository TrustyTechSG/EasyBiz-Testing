import { test, expect } from '@playwright/test';
// line item note
test('test', async ({ page }) => {
const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
await page.goto(response.url);
await page.getByText('Sweater').click();
await page.getByRole('heading', { name: 'Laundry' }).getByRole('button', { name: 'plus' }).click();
await page.getByRole('button', { name: 'Line item details' }).click();
await page.getByPlaceholder('Line item note').click();
await page.getByPlaceholder('Line item note').fill('line item notes');
const locator = page.getByText('* line item notes');
await expect(locator).toBeAttached();                                                //line item preview
await page.getByPlaceholder('Search customer, order').click();
await page.getByPlaceholder('Search customer, order').fill('test');
await page.getByText('[1] test +91 98765 53210').click();
await page.getByRole('button', { name: 'Payment' }).click();
await page.getByRole('button', { name: 'cash' }).click();
await page.getByRole('button', { name: 'Create order' }).click();
await expect(page.getByText('** line item notes')).toBeVisible();                 //receipt
await expect(page.getByText('Sweater ₹ 6.00 x 1/pcs ₹ 6.00')).toBeVisible();
await expect(page.getByText('- L')).toBeAttached();
await expect(page.getByText('Customer name: test')).toBeVisible();
await expect(page.getByText('Customer tel: +91 98765 53210')).toBeAttached();
await page.getByRole('img', { name: 'tag' }).locator('svg').click();
await expect(page.getByText('* line item notes', { exact: true })).toBeVisible(); // under label tab
await expect(page.getByText('test Sweater [L] * line item notes')).toBeVisible(); // printed in label
});

