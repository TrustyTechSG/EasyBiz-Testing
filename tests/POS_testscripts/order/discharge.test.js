import { test, expect } from '@playwright/test';
//discharge
test('test', async ({ page }) => {
const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
await page.goto(response.url);
await page.getByPlaceholder('Search customer, order').click();
await page.getByPlaceholder('Search customer, order').click();
await page.getByPlaceholder('Search customer, order').fill('test');
await page.getByText('test +91 98765 53210').click();
await page.getByText('Sweater').click();
await page.getByRole('heading', { name: 'Laundry' }).getByRole('button', { name: 'plus' }).click();
await page.getByRole('button', { name: ' Payment' }).click();
await page.getByRole('button', { name: 'Cash' }).click();
await page.getByRole('button', { name: 'Create order' }).click();
await page.locator('.ant-segmented-item-icon > .ant-badge > .anticon > svg').click();
await page.getByLabel('Select all').check();
await page.getByRole('button', { name: 'check Discharge (1/1)' }).click();
await page.getByRole('button', { name: 'OK', exact: true }).click();
expect(page.getByText('Collection Receipt', { exact: true })).toHaveText;
expect(page.getByText('Customer name test')).toHaveText;
expect(page.getByText('Customer tel +91 98765 53210')).toHaveText;
expect(page.getByText('Return type Self collection at FIRST STORE')).toHaveText;
expect(page.getByText('Sweater x 1/pcs')).toHaveText;
expect(page.getByText('- Laundry')).toHaveText;
expect(page.getByText('Subtotal 1/unit')).toHaveText;
expect(page.getByText('Difference to minimum (min: ₹ 10.00)')).toHaveText;
});