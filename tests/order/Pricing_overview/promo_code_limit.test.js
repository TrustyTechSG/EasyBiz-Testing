import { test, expect } from '@playwright/test';
//promo code usage limit. use again limit
test('test', async ({ page }) => {
const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
await page.goto(response.url);
await page.getByPlaceholder('Search customer, order').click();
await page.getByPlaceholder('Search customer, order').fill('test');
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
expect( page.getByText('ASDFGHJKL (₹ 7.00)')).toBeVisible();
expect( page.getByRole('heading', { name: '(PAID)' })).toBeVisible();
expect( page.getByText('Customer name: test')).toBeVisible();
expect( page.getByText('Customer tel: +91 98765 53210')).toBeVisible();
expect( page.getByText('Leather Jacket ₹ 60.00 x 1/pcs ₹ 60.00')).toBeVisible();
expect( page.getByText('- Dry Clean')).toBeVisible();
expect( page.getByText('Pay by Cash')).toBeVisible();

});