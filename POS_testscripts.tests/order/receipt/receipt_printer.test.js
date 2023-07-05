import { test, expect } from '@playwright/test';
// Receipt printer
test('test', async ({ page }) => {
const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
await page.goto(response.url)
await page.getByRole('button', { name: 'shop FIRST STORE' }).click();
await page.getByRole('button', { name: 'printer Receipt printer' }).click();
await page.getByRole('button', { name: 'plus Add device' }).click();
await expect(page.getByText('Failed to execute \'requestDevice\' on \'USB\': No device selected.')).toBeTruthy();
});