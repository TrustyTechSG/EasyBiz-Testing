import { test, expect } from '@playwright/test';
//dicharge 
test('test', async ({ page }) => {
const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
await page.goto(response.url);
await page.getByPlaceholder('Search customer, order').click();
await page.getByText('[1]').click();
await page.getByText('Sweater').click();
await page.getByRole('heading', { name: 'Laundry' }).getByRole('button', { name: 'plus' }).click();
await page.getByRole('button', { name: ' Payment' }).click();
await page.getByRole('button', { name: 'Cash' }).click();
await page.getByRole('button', { name: 'Create order' }).click();
await page.locator('.ant-segmented-item-icon > .ant-badge > .anticon > svg').click();
await page.getByLabel('Select all').check();
await page.getByRole('button', { name: 'check Discharge (1/1)' }).click();
await page.getByRole('button', { name: 'OK', exact: true }).click();
await expect(page.getByText('Collection Receipt', { exact: true })).toHaveText;});