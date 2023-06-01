import { test, expect } from '@playwright/test';
//clock in & clock out
test('test', async ({ page }) => {
const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
await page.goto(response.url);
await page.getByRole('button', { name: '0', exact: true }).click();
await page.getByRole('button', { name: '0', exact: true }).click();
await page.getByRole('button', { name: '0', exact: true }).click();
await page.getByRole('button', { name: '0', exact: true }).click();
await page.getByRole('button', { name: 'login Team_mng for store' }).click();
await page.getByRole('button', { name: 'logout Clock out' }).click();
await expect(page.getByText('Clock In', { exact: true })).toBeTruthy();
});