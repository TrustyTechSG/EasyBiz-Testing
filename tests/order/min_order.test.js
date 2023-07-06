import { test, expect } from '@playwright/test';
//minimum order
test('test', async ({ page }) => {
const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
await page.goto(response.url);
expect(page.getByText('Minimum order ₹10.00')).toBeVisible();

});