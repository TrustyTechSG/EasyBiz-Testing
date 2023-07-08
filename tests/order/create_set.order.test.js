import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
  await page.goto(response.url);
  await page.getByText('Punjabi Suit').click();
  await page.getByRole('heading', { name: 'Dry Clean ₹22.00 minus 0 set plus' }).getByRole('button', { name: 'plus' }).click();
  await page.getByPlaceholder('Search customer, order').fill('test');
  await page.getByText('[1] test +91 98765 53210').click();
  await expect(page.getByText('Payable Amount₹22.00')).toBeVisible();
  await page.getByRole('button', { name: 'Payment' }).click();
  await page.getByRole('button', { name: 'cash' }).click();
  await page.getByRole('button', { name: 'Create order' }).click();
  await page.getByRole('tabpanel', { name: 'Customer receipt' }).press('ArrowDown');
  await expect(page.getByRole('heading', { name: '(PAID)' })).toBeVisible();
  await expect(page.getByText('Customer name test')).toBeVisible();
  await expect(page.getByText('Customer tel +91 98765 53210')).toBeVisible();
  await page.getByRole('tabpanel', { name: 'Customer receipt' }).press('ArrowDown');
  await expect(page.getByText('Return type Self collection at FIRST STORE')).toBeVisible();
  await expect(page.getByText('Punjabi Suit ₹ 22.00 x 1/set ₹ 22.00')).toBeVisible();
  await expect(page.getByText('- Dry Clean')).toBeVisible();
  await expect(page.getByText('Subtotal 2/pcs ₹ 22.00')).toBeVisible();
  await expect(page.getByText('anniversary offer (2%) (₹ 0.44)')).toBeVisible();
  await expect(page.getByText('GST 2% ₹ 0.43')).toBeVisible();
  await expect(page.getByText('Rounding ₹ 0.01')).toBeVisible();
  await expect(page.getByText('Total (inclusive of GST) ₹ 22.00')).toBeVisible();
  await expect(page.getByText('Pay by Cash (₹ 22.00)')).toBeVisible();
});