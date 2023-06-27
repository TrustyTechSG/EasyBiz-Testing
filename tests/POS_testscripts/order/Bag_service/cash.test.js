import { test, expect } from '@playwright/test';
//bag service order created
test('test', async ({ page }) => {
  const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
  await page.goto(response.url);
  await page.locator('.ant-space-item > .ant-btn').first().click();
  await page.getByText('Bag Service').click();
  await page.getByText('Bag', { exact: true }).click();
  await page.getByRole('button', { name: 'ACNE STUDIOS' }).click();
  await page.getByRole('textbox').nth(1).fill('7');
  await page.getByRole('button', { name: 'Next right' }).click();
  await page.getByRole('button', { name: 'BLACK' }).click();
  await page.getByRole('button', { name: 'Next right' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Interior General Cleaning[IC]' }).getByRole('button', { name: 'plus' }).click();
  await page.getByRole('button', { name: 'Next right' }).click();
  await page.getByRole('button', { name: 'right' }).click();
  await page.getByText('14').click();
  await page.getByRole('button', { name: 'Complete & Close' }).click();
  await page.getByPlaceholder('Search customer, order').click();
  await page.getByText('[1] test').click();
  await page.getByRole('button', { name: 'Payment' }).click();
  await page.getByRole('button', { name: 'cash' }).click();
  await page.getByRole('button', { name: 'Create order' }).click();
  await expect(page.getByText('Order created')).toHaveText;
  await expect(page.getByText('Customer name: test')).toBeTruthy()
  await expect(page.getByText('Customer tel: +91 98765 53210')).toBeTruthy()
  await expect(page.getByText('- Interior General Cleaning ₹ 30.00')).toBeTruthy();
  await expect(page.getByText('Bag x 1 ₹ 30.00')).toBeTruthy();
  await expect(page.getByText('- Brand: ACNE STUDIOS')).toBeTruthy();
  await expect(page.getByText('- Serial No.: 7')).toBeTruthy();
  await expect(page.getByText('- Colour: BLACK')).toBeTruthy();
  await expect(page.getByText('Subtotal 1/pcs ₹ 30.00')).toBeTruthy();
  await expect(page.getByText('Pay by Cash (₹ 30.60)')).toBeTruthy();
});