import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
await page.goto(response.url)
await page.getByRole('button', { name: 'shop FIRST STORE' }).click();
await page.getByRole('button', { name: 'qrcode Print' }).click();
await page.getByPlaceholder('Enter bag number or storage code').click();
await page.getByPlaceholder('Enter bag number or storage code').fill('ABC');
await page.getByRole('button', { name: 'printer Print QR bag label' }).click();
await expect(page.getByText('Printer not paired')).toHaveText;
});