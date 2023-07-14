import { test, expect } from '@playwright/test';
//minimum order
test('test', async ({ page }) => {
const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
await page.goto(response.url);
await page.getByText('Sweater').click();
await page.getByRole('heading', { name: 'Dry Clean' }).getByRole('button', { name: 'plus' }).click();
await expect(page.getByText('Difference to minimum₹2.00')).toBeVisible();
});