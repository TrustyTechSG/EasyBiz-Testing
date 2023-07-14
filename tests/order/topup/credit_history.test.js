import { test, expect } from '@playwright/test';
//credit history
test('test', async ({ page }) => {
  const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
  await page.goto(response.url);
  await page.getByText('Sweater').click();
  await page.getByRole('heading', { name: 'Laundry' }).getByRole('button', { name: 'plus' }).click();
  await page.getByPlaceholder('Search customer, order').click();
  await page.getByPlaceholder('Search customer, order').fill('test');
  await page.getByText('[1] test ').click();
  await page.getByRole('img', { name: 'wallet' }).locator('path').click();
  await page.getByRole('listitem').filter({ hasText: '#1Top up INR4, get INR3 free' }).getByLabel('').click();
  await page.getByRole('button', { name: 'Top up payment' }).click();
  await page.getByRole('button', { name: 'cash' }).click();
  await page.getByRole('button', { name: 'Make payment' }).click();
  await expect(page.getByText('Top up amount: ₹ 4.00')).toBeVisible();
  await expect(page.getByText('Gift amount: ₹ 3.00')).toBeVisible();
  await expect(page.getByText('Paid by: Cash')).toBeVisible();
  await page.getByRole('button', { name: 'Close', exact: true }).click();
  await page.getByRole('button', { name: 'history Credit history' }).click();
/*  await page.getByRole('listitem').filter({ hasText: 'Top Up' }).getByRole('strong').click();
  await expect(page.getByText('Top up amount: ₹ 4.00')).toBeVisible();
  await expect(page.getByText('Gift amount: ₹ 3.00')).toBeVisible();
*/
});