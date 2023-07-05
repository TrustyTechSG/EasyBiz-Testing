import { test, expect } from '@playwright/test';
//change home delivery
test('test', async ({ page }) => {
  const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
  await page.goto(response.url);
  await page.getByRole('button', { name: 'number', exact: true }).click();
  await page.getByRole('button', { name: '1', exact: true }).click();
  await page.getByRole('button', { name: '5' }).click();
  await page.getByRole('button', { name: 'Close', exact: true }).click();
  await page.getByText('[15] abc').click();
  await page.getByText('T-Shirt').click();
  await page.getByRole('heading', { name: 'Laundry ₹6.00 minus 0 pcs plus' }).getByRole('button', { name: 'plus' }).click();
  await page.getByRole('button', { name: 'calendar' }).click();
  await page.getByText('Home delivery').click();
  await page.getByRole('button', { name: 'right', exact: true }).click();
  await page.getByRole('button', { name: 'right', exact: true }).click();
  await page.getByText('23', { exact: true }).click();
  await page.getByRole('button', { name: ' Payment' }).click();
  await page.getByRole('button', { name: 'Cash' }).click();
  await page.getByRole('button', { name: 'Create order' }).click();
  expect(page.getByText('Return type Home delivery')).toBeTruthy();
  expect(page.getByRole('heading', { name: '(PAID)' })).toBeTruthy();
  expect(page.getByText('Customer name: abc')).toBeTruthy();
  expect(page.getByText('T-Shirt ₹ 6.00 x 1/pcs ₹ 6.00')).toBeTruthy();
  expect(page.getByText('- L')).toBeTruthy();
  expect(page.getByText('Subtotal 1/pcs ₹ 10.00')).toBeTruthy();
  expect(page.getByText('Pay by Cash (₹ 10.20)')).toBeTruthy();

});