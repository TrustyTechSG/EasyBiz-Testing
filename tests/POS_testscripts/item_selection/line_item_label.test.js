import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
await page.goto(response.url);
await page.getByText('Windbreaker').click();
await page.getByRole('heading', { name: 'Laundry' }).getByRole('button', { name: '0 pcs' }).click();
await page.getByRole('button', { name: '1',exact: true }).click();
await page.getByRole('button', { name: 'Add' }).click();
await page.getByRole('button', { name: 'Line item details' }).click();
await page.getByRole('button', { name: 'Accessory' }).click();
await page.getByRole('listitem').filter({ hasText: 'Own Hanger0 pcs' }).getByRole('button', { name: 'plus' }).click()
const locator = page.getByText('Accessory: Own Hanger ');
await expect(locator).toBeVisible();
await page.getByPlaceholder('Search customer, order').click();
await page.getByPlaceholder('Search customer, order').fill('test');
await page.getByText('[1] test +91 98765 53210').click();
await page.getByRole('button', { name: 'Payment' }).click();
await page.getByRole('button', { name: 'cash' }).click();
await page.getByRole('button', { name: 'Create order' }).click();
await expect(page.getByText('Customer name: test')).toBeVisible();
await expect(page.getByText('Customer tel: +91 98765 53210')).toBeTruthy();
await expect(page.getByText('- Accessory: Own Hanger x 1')).toBeVisible();
await page.getByRole('img', { name: 'tag' }).locator('svg').click();
await expect(page.getByText('Accessory')).toBeTruthy();
});