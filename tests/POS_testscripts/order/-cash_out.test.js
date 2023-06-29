import { test, expect } from '@playwright/test';
//-cash out
test('test', async ({ page }) => {
const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
await page.goto(response.url);
await page.getByRole('button', { name: 'container' }).click();
await page.getByRole('button', { name: 'minus Cash out' }).click();
await page.getByRole('dialog').getByRole('button', { name: '2' }).click();
await page.getByRole('button', { name: 'Preview' }).click();
await page.getByPlaceholder('Note').click();
await page.getByPlaceholder('Note').fill('cash out');
await page.getByRole('button', { name: 'Confirm cash out' }).click();
await expect(page.getByText('Cash In/Out ())')).toBeTruthy();
});