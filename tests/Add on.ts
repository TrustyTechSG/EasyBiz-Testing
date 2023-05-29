//Add on
import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
await page.goto(response.url);
await page.getByText('T-Shirt').click();
await page.getByRole('heading', { name: 'Laundry' }).getByRole('button', { name: 'plus' }).click();
await page.getByRole('button', { name: 'right Line item details' }).click();
await page.getByRole('button', { name: 'subnode Add-on' }).click();
await page.getByRole('listitem').filter({ hasText: 'HANG STRAIGHT[H/S]' }).getByRole('button', { name: 'plus' }).click();
const locator = page.getByText('Add-on: HANG STRAIGHT');
await expect(locator).toBeVisible();
// At receipt page
});