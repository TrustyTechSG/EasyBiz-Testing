//search filter
import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
await page.goto(response.url);
await page.getByPlaceholder('Search product').click();
await page.getByPlaceholder('Search product').fill('sha');
await page.getByText('Shawl').click();
const locator = page.getByText('Shawl');
await expect(locator).toBeTruthy();
});