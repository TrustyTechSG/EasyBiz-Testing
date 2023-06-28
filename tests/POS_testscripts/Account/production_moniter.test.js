import { test, expect } from '@playwright/test';
//production moniter
test('test', async ({ page }) => {
const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
await page.goto(response.url);
await page.getByRole('button', { name: 'desktop' }).click();
await page.getByText('12', { exact: true }).click();
await page.getByRole('button', { name: 'right Orders 0/47 (47 pending)' }).click();
await page.getByRole('button', { name: '#00722' }).click();
await page.getByRole('button', { name: 'Order detail' }).click();
await expect(page.getByText('FIRST STORE FIRST STORE EasyBiz address Store: ')).toBeTruthy();
await page.getByRole('img', { name: 'hourglass' }).locator('path').click();
await expect(page.getByRole('img', {name: 'loading'}).locator('svg')).toBeTruthy();
});