import { test, expect } from '@playwright/test';
//sign out
test('test', async ({ page }) => {
const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
await page.goto(response.url)
await page.getByRole('button', { name: 'shop FIRST STORE' }).click();
await page.getByRole('button', { name: 'logout Sign out store' }).click();
await expect(page.getByText('Your are signing out POS from store FIRST STORE')).toHaveText;
});