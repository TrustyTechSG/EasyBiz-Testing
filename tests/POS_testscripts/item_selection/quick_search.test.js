import { test, expect } from '@playwright/test';
//quick search
test('test', async ({ page }) => {
  const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
  await page.goto(response.url);
  await page.getByRole('button', { name: 'number', exact: true }).click();
  await page.getByRole('button', { name: '8' }).click();
  await page.getByText('[8] Cba +91 94444 44444').click();
  await page.getByText('Sweater').click();
  await page.getByRole('heading', { name: 'Laundry ₹6.00 minus 0 pcs plus' }).getByRole('button', { name: 'plus' }).click();
  await page.getByRole('button', { name: 'Payment' }).click();
  await page.getByRole('button', { name: 'Cash' }).click();
  await page.getByRole('button', { name: 'Create order' }).click();
  const locator = page.getByText('Sweater ₹ 6.00 x 1/pcs ₹ 6.00');
  await expect(locator).toBeVisible();
  await expect(page.getByText('- L')).toHaveText;
  await expect(page.getByText('Pay by Cash (₹ 10.20)')).toBeVisible();
  await expect(page.getByText('Customer name: Cba')).toBeVisible();
  await expect(page.getByText('Customer tel: +91 94444 44444')).toBeVisible();
  await expect(page.getByText('Sweater ₹ 6.00 x 1/pcs ₹ 6.00')).toBeVisible();
})