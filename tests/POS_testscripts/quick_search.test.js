import { test, expect } from '@playwright/test';
//create order with quick search
test('test', async ({ page }) => {
  const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
  await page.goto(response.url);
  await page.getByRole('button', { name: 'number', exact: true }).click();
  await page.getByRole('button', { name: '8' }).click();
  await page.getByRole('button', { name: 'Order No' }).click();
  await page.getByRole('button', { name: 'Close', exact: true }).click();
  await page.getByText('[8] Cba Aswini').click();
  await page.locator('div:nth-child(2) > .ant-card > .ant-card-body > .ant-badge > .ant-image > .ant-image-img').click();
  await page.getByRole('heading', { name: 'Laundry ₹6.00 minus 0 pcs plus' }).getByRole('button', { name: 'plus' }).click();
  await page.getByRole('button', { name: 'Payment' }).click();
  await page.getByRole('button', { name: 'Cash' }).click();
  await page.getByRole('button', { name: 'Create order' }).click();
  const locator = page.getByText('Sweater');
  await expect(locator).toBeTruthy();
});