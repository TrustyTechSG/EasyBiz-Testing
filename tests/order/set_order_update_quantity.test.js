import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
  await page.goto(response.url)
  await page.getByText('Punjabi Suit').click();
  await page.getByRole('button', { name: '0 set' }).click();
  await page.getByRole('tooltip', { name: 'Dry Clean ₹22.00' }).getByRole('button', { name: '2' }).click();
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByPlaceholder('Search customer, order').click();
  await page.getByPlaceholder('Search customer, order').fill('test');
  await page.getByText('[1] test +91 98765 53210').click();
  await expect(page.getByText('#1 Punjabi Suit₹22.00x2 set₹44.00Dry Clean')).toBeVisible();
  await expect(page.getByText('Payable Amount₹44.00')).toBeVisible();
  await page.getByRole('button', { name: 'calendar' }).click();
await page.getByRole('button', { name: 'right' }).click();
var currentDate = new Date();
  currentDate.setMonth(currentDate.getMonth() + 1);
  var nextMonth = currentDate.toLocaleString('en-US', { month: '2-digit' });
  console.log(nextMonth);
await page.getByText('24').click();
await page.getByRole('button', { name: 'Payment' }).click();
await page.getByRole('button', { name: 'cash' }).click();
await page.getByRole('button', { name: 'Create order' }).click();
await page.getByRole('tab', { name: 'Internal receipt' }).click();
await page.getByRole('heading', { name: '(PAID)' }).click();
await page.getByRole('tab', { name: 'Customer receipt' }).click();
await expect(page.getByRole('heading', { name: '(PAID)' })).toBeVisible();
await expect(page.getByText('Customer name test')).toBeVisible();
await expect(page.getByText('Customer tel +91 98765 53210')).toBeVisible();
await expect(page.getByText(`Estimated collection 24/${nextMonth}/2023`)).toBeVisible();
await expect(page.getByText('Return type Self collection at FIRST STORE')).toBeVisible();
await expect(page.getByText('Punjabi Suit ₹ 22.00 x 2/set ₹ 44.00')).toBeVisible();
await expect(page.getByText('- Dry Clean')).toBeVisible();
await expect(page.getByText('Total (inclusive of GST) ₹ 44.00')).toBeVisible();
await expect(page.getByText('Pay by Cash (₹ 44.00)')).toBeVisible();
});