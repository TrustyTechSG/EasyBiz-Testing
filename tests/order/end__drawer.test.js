import { test, expect } from '@playwright/test';
//end drawer
test('test', async ({ page }) => {
const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
await page.goto(response.url);
await page.getByRole('button', { name: 'container' }).click();
await page.getByRole('button', { name: 'End drawer' }).click();
await expect(page.getByRole('button', { name: 'Confirm end drawer' })).toBeVisible();
await page.getByRole('button', { name: 'Confirm end drawer' }).click();
await expect(page.getByText('Cash drawer ended')).toBeVisible();
await expect(page.getByText('Not started')).toBeVisible();
});