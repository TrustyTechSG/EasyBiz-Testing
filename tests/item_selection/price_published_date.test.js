import { test, expect } from '@playwright/test';
//price published date
test('test', async ({ page }) => {
const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
await page.goto(response.url);
await page.getByRole('button', { name: 'dollar 2023-05-05' }).click();
await expect(page.getByText('Current published price list version: 2023-05-05')).toBeAttached();
});