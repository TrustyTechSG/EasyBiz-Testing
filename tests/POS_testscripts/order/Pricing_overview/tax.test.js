import { test, expect } from '@playwright/test';
//tax
test('test', async ({ page }) => {
const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
await page.goto(response.url);
await expect(page.getByText('Tax (2%)₹0.20')).toBeAttached();
});