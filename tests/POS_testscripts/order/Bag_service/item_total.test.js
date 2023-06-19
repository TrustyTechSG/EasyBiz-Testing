import { test, expect } from '@playwright/test';
//bag_service_Item-total
test('test', async ({ page }) => {
  const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
  await page.goto(response.url);
await page.locator('.ant-space-item > .ant-btn').first().click();
await page.getByText('Bag Service').click();
await page.getByText('Bag', { exact: true }).click();
await page.getByRole('button', { name: 'MULBERRY' }).click();
await page.getByRole('textbox').nth(1).fill('7');
await page.getByRole('button', { name: 'Next right' }).click();
await page.getByRole('button', { name: 'WHITE' }).click();
await page.getByRole('button', { name: 'Next right' }).click();
await page.getByRole('listitem').filter({ hasText: 'Deep Cleaning[DC]₹150.00 ~' }).getByRole('button', { name: 'plus' }).click();
await expect(page.getByText('Item total: ₹150.00')).toHaveValue;
});