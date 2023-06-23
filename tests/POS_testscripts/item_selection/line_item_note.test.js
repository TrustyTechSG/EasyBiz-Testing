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
await expect(locator).toBeTruthy();

});