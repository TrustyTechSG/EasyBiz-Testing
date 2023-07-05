import { test, expect } from '@playwright/test';
//topup
test('test', async ({ page }) => {
  const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
  await page.goto(response.url);
  await page.getByRole('img', { name: 'wallet' }).locator('path').click();
  await page.getByPlaceholder('Search customer, order').click();
  await page.getByPlaceholder('Search customer, order').fill('test');
  await page.getByText('test +91 98765 53210').click();
  await page.getByRole('listitem').filter({ hasText: '#1Top up INR4, get INR3 free' }).getByLabel('').click();
  await page.getByRole('button', { name: 'Top up payment' }).click();
  await page.getByRole('button', { name: 'cash' }).click();
  await page.getByRole('button', { name: 'Make payment' }).click();
  await expect(page.getByText('Customer: test')).toHaveValue;
  await expect(page.getByText('Customer tel: +91 98765 53210')).toHaveText;
  await expect(page.getByText('Top up amount: ₹ 4.00')).toHaveText;
  await expect(page.getByText('Gift amount: ₹ 3.00')).toHaveText; 
  await expect(page.getByText('Paid by: Cash')).toHaveText; 
  await expect(page.getByText('Served by: FIRST STORE')).toHaveText;
});