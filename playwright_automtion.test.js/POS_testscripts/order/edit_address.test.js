import { test, expect } from '@playwright/test';
//edit address
test('test', async ({ page }) => {
const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
await page.goto(response.url);
await page.getByPlaceholder('Search customer, order').click();
await page.getByPlaceholder('Search customer, order').fill('test');
await page.getByText('test +91 98765 53210').click();
await page.getByText('Leather Jacket').click();
await page.getByRole('button', { name: 'plus', exact: true }).click();
await page.getByRole('button', { name: 'calendar'}).click();
await page.getByText('Home delivery').click();
await page.getByRole('button', { name: 'right Address:' }).click();
await page.getByRole('button', { name: 'plus Add address' }).click();
await page.locator('#rc_select_4').fill('613007');
await page.getByText('Thanjavur, Tamil Nadu 613007, India').click();
await page.getByRole('button', { name: 'Add address' }).click();
await expect(page.getByText('Address added')).toBeTruthy();
expect(page.getByRole('button', { name: 'right Address: Thanjavur, Tamil Nadu 613007, India' })).toHaveText;
await page.getByRole('button', { name: 'right', exact: true }).click();
await page.getByText('12', { exact: true }).click();
expect(page.getByText('Home delivery')).toBeVisible();
await page.getByRole('button', { name: 'Payment' }).click();
await page.getByRole('button', { name: 'cash' }).click();
await page.getByRole('button', { name: 'Create order' }).click();
expect(page.getByRole('heading', { name: '(PAID)' })).toBeTruthy();
expect(page.getByText('Customer name: test')).toBeTruthy();
expect(page.getByText('Customer tel: +91 98765 53210')).toBeTruthy();
expect(page.getByText('Leather Jacket ₹ 60.00 x 1/pcs ₹ 60.00')).toBeTruthy();
expect(page.getByText('- Dry Clean')).toBeTruthy();
expect(page.getByText('Return type: Home delivery')).toBeTruthy();
expect(page.getByText('Subtotal 1/pcs ₹ 60.00')).toBeTruthy();
expect(page.getByText('Total (inclusive of GST) ₹ 60.00')).toBeTruthy();
expect(page.getByText('Address: Thanjavur, Tamil Nadu 613007, India')).toBeTruthy();// edit address

});