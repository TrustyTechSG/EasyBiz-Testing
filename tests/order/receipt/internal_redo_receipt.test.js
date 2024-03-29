import { test, expect } from '@playwright/test';
//redo order internal receipt
test('test', async ({ page }) => {
  const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
  await page.goto(response.url);
  await page.getByRole('button', { name: 'number', exact: true }).click();
  await page.getByRole('button', { name: '1', exact: true }).click();
  await page.getByText('[1] test').click();
  await page.getByText('Business Jacket').click();
  await page.getByRole('heading', { name: 'Dry Clean' }).getByRole('button', { name: 'plus' }).click();
  await page.getByRole('button', { name: 'Payment' }).click();
  await page.getByRole('button', { name: 'cash' }).click();
  await page.getByRole('button', { name: 'Create order' }).click();
 await page.locator('label:nth-child(6) > .ant-segmented-item-label').click();
 await page.getByRole('button', { name: 'redo Redo' }).click();
 await page.getByRole('button', { name: 'Create redo order' }).click();
 await page.getByRole('tab', { name: 'Internal receipt' }).click();
 await expect(page.getByRole('tabpanel', { name: 'Internal receipt' }).getByText('Subtotal ₹ 0.00')).toBeTruthy();
 })