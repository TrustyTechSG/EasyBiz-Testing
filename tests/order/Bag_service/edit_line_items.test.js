import { test, expect } from '@playwright/test';
//edit line items
test('test', async ({ page }) => {
  const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
  await page.goto(response.url);
  await page.locator('.ant-space-item > .ant-btn').first().click();
  await page.getByText('Bag Service').click();
  await page.getByText('Bag', { exact: true }).click();
  await page.getByRole('button', { name: 'MULBERRY' }).click();
  await page.getByRole('textbox').nth(1).fill('7');
  await page.getByRole('button', { name: 'Next right' }).click();
  await page.getByRole('button', { name: 'WHITE' }).click();
  await page.getByRole('button', { name: 'Next right' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Deep Cleaning[DC]' }).getByRole('button', { name: 'plus' }).click();
  await page.getByRole('button', { name: 'Next right' }).click();
  await page.getByRole('button', { name: 'right' }).click();
  var currentDate = new Date();
  currentDate.setMonth(currentDate.getMonth() + 1);
  var nextMonth = currentDate.toLocaleString('en-US', { month: '2-digit' });
  console.log(nextMonth);
  await page.getByText('15', { exact: true }).click();
  await page.getByRole('button', { name: 'Complete & Close' }).click();
  await page.getByPlaceholder('Search customer, order').click();
  await page.getByText('[1] test ').click();
  await page.getByRole('button', { name: 'plus Surcharge' }).click();
  await page.getByRole('listitem').filter({ hasText: 'sur_charge' }).getByRole('button', { name: 'plus' }).click();
  await page.getByRole('button', { name: 'Payment' }).click();
  await page.getByRole('button', { name: 'cash' }).click();
  await page.getByRole('button', { name: 'Create order' }).click();
  await page.getByRole('dialog').getByRole('img', { name: 'credit-card' }).locator('svg').click();
  await expect(page.getByRole('button', {name: 'edit Edit line items'})).toBeDisabled();
  await page.getByRole('img', { name: 'file-text' }).locator('path').click();
  await expect(page.getByText('Customer name test')).toBeVisible();
  await expect(page.getByText('Customer tel +91 98765 53210')).toBeVisible();
  await expect(page.getByText('- Deep Cleaning ₹ 150.00')).toBeVisible();
  await expect(page.getByText('Bag x 1 ₹ 150.00')).toBeVisible();
  await expect(page.getByText('- Deep Cleaning ₹ 150.00')).toBeVisible();
  await expect(page.getByText('- Brand: MULBERRY')).toBeVisible();
  await expect(page.getByText('- Serial No.: 7')).toBeVisible();
  await expect(page.getByText('- Colour: WHITE')).toBeVisible();
  await expect(page.getByText('Pay by Cash (₹ 165.25)')).toBeVisible();
});