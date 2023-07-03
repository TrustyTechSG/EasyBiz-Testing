import { test, expect } from '@playwright/test';
//partial payment
test('test', async ({ page }) => {
const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
await page.goto(response.url);
await page.getByPlaceholder('Search customer, order').click();
await page.getByPlaceholder('Search customer, order').fill('test');
await page.getByText('[1] test').click();
await page.getByText('Kebaya').click();
await page.getByRole('button', { name: 'plus', exact: true }).click();
await page.getByRole('button', { name: 'Payment' }).click();
await page.getByRole('button', { name: 'cash' }).click();
await page.getByRole('listitem').filter({ hasText: 'Amount paid₹22.45' }).getByRole('button', { name: 'edit' }).click();
await page.getByRole('tooltip', { name: 'Partial Payment' }).getByRole('button', { name: '2' }).click();
await page.getByRole('tooltip', { name: 'Partial Payment' }).getByRole('button', { name: '0' }).click();
await page.getByRole('button', { name: 'Update' }).click();
await expect(page.getByText('Outstanding₹2.45')).toBeTruthy();
})