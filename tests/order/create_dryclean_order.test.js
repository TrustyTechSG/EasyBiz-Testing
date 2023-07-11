import { test, expect} from '@playwright/test';

test('test', async ({ page }) => {
const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
await page.goto(response.url);
await page.getByText('T-Shirt').click();
await page.getByRole('heading', { name: 'Dry Clean ₹7.00 minus 0 pcs plus' }).getByRole('button', { name: 'plus' }).click();
await page.getByPlaceholder('Search customer, order').click();
await page.getByPlaceholder('Search customer, order').fill('test');
await page.getByText('[1] test +91 98765 53210').click();
await page.getByRole('button', { name: 'Payment' }).click();
await page.getByRole('button', { name: 'cash' }).click();
await page.getByRole('button', { name: 'Create order' }).click();
await page.getByRole('tab', { name: 'Internal receipt' }).click();
await page.getByText('T-Shirt - Dry Clean ₹ 7.00 x 1/pcs ₹ 7.00').click();
await page.getByRole('tab', { name: 'Customer receipt' }).click();
await page.getByRole('tabpanel', { name: 'Customer receipt' }).press('ArrowDown');
await expect(page.getByText('Customer name test')).toBeVisible();
await expect(page.getByText('Customer tel +91 98765 53210')).toBeVisible();
await expect(page.getByText('T-Shirt ₹ 7.00 x 1/pcs ₹ 7.00')).toBeVisible();
await expect(page.getByText('- Dry Clean', { exact: true })).toBeVisible();
await expect(page.getByText('Pay by Cash (₹ 10.20)')).toBeVisible();
});
