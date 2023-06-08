import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
// Recording...
const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
await page.goto(response.url);
await page.getByPlaceholder('Search customer, order').click();
await page.getByPlaceholder('Search customer, order').fill('1');
await page.getByText('[1]').click();
await page.getByText('Leather Jacket').click();
await page.getByRole('button', { name: 'plus', exact: true }).click();
await page.getByRole('button', { name: 'calendar'}).click();
await page.getByText('Home delivery').click();
await page.getByRole('button', { name: 'right Address:' }).click();
await page.getByRole('button', { name: 'plus Add address' }).click();
await page.locator('#rc_select_4').fill('613006');
await page.getByText('Thanjavur, Tamil Nadu 613006, India').click();
await page.getByText('Set as default address').click();
await page.getByRole('button', { name: 'Add address' }).click();
await expect(page.getByText('Address added')).toBeVisible();
});