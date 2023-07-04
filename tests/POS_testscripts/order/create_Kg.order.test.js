import { test, expect } from '@playwright/test';
//create kg order
test('test', async ({ page }) => {
  const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
  await page.goto(response.url);
  await page.getByText('LOAD WASH').click();
  await page.getByText('Load Wash - Per Kg').click();
  await page.getByRole('button', { name: 'plus Add' }).click();
  await page.getByRole('button', { name: '1' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: '1' }).click();
  await page.getByRole('button', { name: 'Add', exact: true }).click();
  await page.getByPlaceholder('Search customer, order').click();
  await page.getByPlaceholder('Search customer, order').fill('test');
  await page.getByText('test +91 98765 53210').click();
  await page.getByRole('button', { name: 'Payment' }).click();
  await page.getByRole('button', { name: 'cash' }).click();
  await page.getByRole('button', { name: 'Create order' }).click();
  await page.getByRole('tab', { name: 'Customer receipt' }).click();
  await expect(page.getByText('Customer name test')).toBeAttached();
  await expect(page.getByText('Customer tel +91 98765 53210')).toBeAttached(); 
  await expect(page.getByText('Load Wash - Per Kg ₹ 7.00 x 1/kg ₹ 7.00')).toBeAttached();
  await expect(page.getByRole('heading', { name: '(PAID)' })).toBeAttached();
  await expect(page.getByText('- Duvets & Bulky Items')).toBeAttached();
  await expect(page.getByText('- 1 pcs')).toBeAttached();
  await expect(page.getByText('Subtotal 1/pcs ₹ 10.00')).toBeAttached();
  await expect(page.getByText('Pay by Cash (₹ 10.20)')).toBeAttached();
  });