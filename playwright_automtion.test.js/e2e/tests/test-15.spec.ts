import { test, expect } from '@playwright/test';
//promo code usage limit. use again limit
test('test', async ({ page }) => {
const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
await page.goto(response.url);
await page.getByRole('button', { name: 'number', exact: true }).click();
await page.getByRole('button', { name: '1', exact: true }).click();
await page.getByRole('button', { name: 'Order No' }).click();
await page.getByRole('button', { name: 'Close', exact: true }).click();
await page.getByText('[1] test').click();
await page.getByText('Leather Jacket').click();
await page.getByRole('button', { name: 'plus', exact: true }).click();
await page.getByRole('button', { name: 'number Promo code' }).click();
await page.getByPlaceholder('enter promo code').click();
await page.getByPlaceholder('enter promo code').press('CapsLock');
await page.getByPlaceholder('enter promo code').fill('ASDFGHJKL');
await page.getByRole('button', { name: 'Use' }).click();
await page.getByRole('button', { name: 'Payment' }).click();
await page.getByRole('button', { name: 'Cash' }).click();
await page.getByRole('button', { name: 'Create order' }).click();
await expect( page.getByText('ASDFGHJKL (₹ 7.00)')).toBeTruthy();
});