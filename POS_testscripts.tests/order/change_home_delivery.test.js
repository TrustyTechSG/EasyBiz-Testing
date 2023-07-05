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

  var currentDate = new Date();
  currentDate.setMonth(currentDate.getMonth() + 1);
  var nextMonth = currentDate.toLocaleString('en-US', { month: '2-digit' });
  console.log(nextMonth);
  await page.getByText('24', { exact: true }).click();

  await page.getByRole('button', { name: ' Payment' }).click();
  await page.getByRole('button', { name: 'Cash' }).click();
  await page.getByRole('button', { name: 'Create order' }).click();
  await page.getByRole('tab', { name: 'Internal receipt' }).click();
  await expect(page.getByRole('heading', { name: '(PAID)' })).toBeVisible();
  await page.getByRole('tab', { name: 'Customer receipt' }).click();
  await expect(page.getByText('Customer name abc')).toBeVisible();
  await expect(page.getByText('Return type Home delivery')).toBeVisible();
  await expect(page.getByText(`Schedule 24/${nextMonth}/2023`)).toBeVisible();
  await expect(page.getByRole('heading', { name: '(PAID)' })).toBeVisible();
  await expect(page.getByText('Customer name abc')).toBeVisible();
  await expect(page.getByText('T-Shirt ₹ 6.00 x 1/pcs ₹ 6.00')).toBeVisible();
  await expect(page.getByText('- L', { exact: true })).toBeVisible();
  await expect(page.getByText('Subtotal 1/pcs ₹ 10.00')).toBeVisible();
  await expect(page.getByText('Pay by Cash (₹ 10.20)')).toBeVisible();

});