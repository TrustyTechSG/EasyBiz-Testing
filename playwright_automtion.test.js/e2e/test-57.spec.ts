import { test, expect } from '@playwright/test';
//start cash drawer 
test('test', async ({ page }) => {
const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
await page.goto(response.url);
await page.getByRole('button', { name: 'container' }).click();
await page.getByRole('button', { name: 'Start drawer' }).click();
await page.getByRole('button', { name: 'Confirm' }).click();
await expect(page.getByText('Cash drawer started')).toHaveText;
});
