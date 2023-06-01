import { test, expect } from '@playwright/test';
//Add sqft item
test('test', async ({ page }) => {
const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
await page.goto(response.url);
await page.getByText('HOUSEHOLD & BEDDING').click();
await page.getByText('Carpet - per sqft').click();
await page.getByRole('heading', { name: 'Laundry' }).getByRole('button', { name: 'plus Add' }).click();
await page.getByRole('button', { name: '5', exact: true }).click();
await page.getByRole('button', { name: '0', exact: true }).click();
await page.getByRole('button', { name: 'Add', exact: true }).click();
const locator = page.getByText('Carpet');
await expect(locator).toBeTruthy();
});