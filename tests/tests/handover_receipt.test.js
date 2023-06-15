import { test, expect } from '@playwright/test';
//handoverreceipt
test('test', async ({ page }) => {
const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
await page.goto(response.url);
await page.getByRole('button', { name: 'car', exact: true }).click();
await page.getByRole('checkbox', { name: 'Select all' }).check();
await page.getByRole('button', { name: 'Check in' }).click();
await page.getByText('Handover Receipt').click();
});