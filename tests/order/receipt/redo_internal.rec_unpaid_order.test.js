import { test, expect } from '@playwright/test';
//unpaid redo order internal receipt
test('test', async ({ page }) => {
  const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
  await page.goto(response.url);
  await page.getByPlaceholder('Search customer, order').click();
  await page.getByPlaceholder('Search customer, order').fill('test');
  await page.getByText('[1] test').click();
  await page.getByText('Business Jacket').click();
  await page.getByRole('heading', { name: 'Dry Clean' }).getByRole('button', { name: 'plus' }).click();
  await page.getByRole('button', { name: 'Payment' }).click();
  await page.getByRole('button', { name: 'unpaid' }).click();
  await page.getByRole('button', { name: 'Create order' }).click();
  await page.locator('label:nth-child(6) > .ant-segmented-item-label').click();
  await page.getByRole('button', { name: 'redo Redo' }).click();
  await page.getByRole('button', { name: 'Create redo order' }).click();
  await page.getByRole('button', { name: 'border #1' }).click();
  await page.getByRole('button', { name: 'Create redo order' }).click();
  await page.getByRole('tab', { name: 'Internal receipt' }).click();
  expect(page.getByRole('heading', { name: '(PAID)' })).toBeTruthy();
});