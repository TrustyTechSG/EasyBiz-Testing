import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
  await page.goto(response.url);
  await page.getByPlaceholder('Search customer, order').click();
  await page.getByPlaceholder('Search customer, order').fill('test');
  await page.getByText('test +91 98765 53210').click();
  await page.getByText('Leather Jacket').click();
  await page.getByRole('button', { name: 'plus', exact: true }).click();
  await page.getByRole('button', { name: 'Payment' }).click();
  await page.getByRole('button', { name: 'cash' }).click();
  await page.getByRole('button', { name: 'Create order' }).click();
  await page.getByRole('tab', { name: 'Customer receipt' }).click();
  await expect(page.getByText('Customer name test')).toBeAttached();
  await expect(page.getByText('Customer tel +91 98765 53210')).toBeAttached();
  await expect(page.getByText('Leather Jacket ₹ 60.00 x 1/pcs ₹ 60.00')).toBeAttached();
  await expect(page.getByText('Return type Self collection at FIRST STORE')).toBeAttached();
  await expect(page.getByText('- Dry Clean')).toBeAttached();
  await expect(page.getByText('Subtotal 1/pcs ₹ 60.00')).toBeAttached();
  await expect(page.getByText('Pay by Cash (₹ 61.20)')).toBeAttached();

  });