import { test, expect } from '@playwright/test';
//production moniter
test('test', async ({ page }) => {
const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
await page.goto(response.url);
await page.getByRole('button', { name: 'desktop' }).click();
await page.getByText('12', { exact: true }).click();
await page.getByPlaceholder('Search').click();
await page.getByPlaceholder('Search').fill('01230');
await page.getByRole('button', { name: 'search' }).click();
await page.getByRole('button', { name: 'right Orders 0/1 (1 pending)' }).click();
await page.getByRole('button', { name: '#01230' }).click();
await expect(page.getByText('Order #01230 (FIRST STORE)')).toBeAttached();
await expect(page.getByText('Leather JacketProduct')).toBeAttached();
await expect(page.getByText('Line total: ₹60.00')).toBeAttached();
await expect(page.getByText('Dry CleanService Typex 1pcs')).toBeAttached();
});