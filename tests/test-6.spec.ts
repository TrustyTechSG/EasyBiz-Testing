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
});