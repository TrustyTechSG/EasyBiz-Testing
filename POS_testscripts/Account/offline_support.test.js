import { test, expect } from '@playwright/test';
//Offline support
test('test', async ({ page }) => {
const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
await page.goto(response.url)
await page.getByRole('button', { name: 'shop FIRST STORE' }).click();
await page.getByRole('switch', { name: 'Offline support enabled Offline support disabled' }).click();
await expect(page.getByRole('button', { name: 'Disable & Reload App' })).toBeVisible();
});