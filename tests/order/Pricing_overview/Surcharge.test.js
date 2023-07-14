import { test, expect } from '@playwright/test';
//sur charge  -empty order
test('test', async ({ page }) => {
  const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
  await page.goto(response.url);
  await page.getByPlaceholder('Search customer, order').click();
  await page.getByPlaceholder('Search customer, order').fill('test');
  await page.getByText('[1] test').click();
  await page.getByRole('button', { name: 'minus Discount' }).click();
  await page.getByRole('button', { name: 'plus', exact: true }).click();
  await page.getByRole('button', { name: 'plus Surcharge' }).click();
  await page.getByRole('listitem').filter({ hasText: 'sur_charge' }).getByRole('button', { name: 'plus' }).click();
  const locator = page.getByText('sur_chargeEdit₹12.00');
  await expect(locator).toBeVisible();
  await page.getByRole('button', { name: 'Payment' }).click();
  await page.getByRole('button', { name: 'cash' }).click();
  await page.getByRole('button', { name: 'Create order' }).click();
  await page.getByRole('img', { name: 'file-text' }).locator('svg').click();
  await expect(page.getByText('Customer name test')).toBeVisible();
  await expect(page.getByText('Customer tel +91 98765 53210')).toBeVisible();
  await expect(page.getByText('sur_charge ₹ 12.00')).toBeVisible();
  await expect(page.getByText('Pay by Cash (₹ 20.40)')).toBeVisible();
});