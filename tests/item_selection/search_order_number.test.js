import { test, expect } from '@playwright/test';
//search order number 
test('test', async ({ page }) => {
const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
await page.goto(response.url);
await page.getByRole('button', { name: 'number', exact: true }).click();
await page.getByRole('button', { name: '0', exact: true }).click();
await page.getByRole('button', { name: '0', exact: true }).click();
await page.getByRole('button', { name: '0', exact: true }).click();
await page.getByRole('tooltip', { name: 'Quick search' }).getByRole('button', { name: '2' }).click();
await page.getByRole('button', { name: '3', exact: true }).click();
await page.getByRole('button', { name: 'Order No' }).click();
await expect(page.getByText('#00023 (FIRST STORE)')).toBeTruthy();
});