import { test, expect } from '@playwright/test';
//top up
test('test', async ({ page }) => {
  const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
  await page.goto(response.url);
  await page.getByPlaceholder('Search customer, order').click();
  await page.getByPlaceholder('Search customer, order').fill('test');
  await page.getByText('[1] test').click();
  await page.getByRole('img', { name: 'wallet' }).locator('svg').click();
  await page.getByRole('listitem').filter({ hasText: '#1Top up INR4, get INR3 free' }).getByLabel('').click();
  await page.getByRole('button', { name: 'credit-card Top up payment' }).click();
  await page.getByRole('button', { name: 'cash' }).click();
  await page.getByRole('button', { name: 'Make payment' }).click();
  await expect(page.getByText('Top Up Receipt Customer: test Customer tel: +91 98765 53210 Top up amount: ₹ 4.0')).toBeTruthy();
  await expect(page.getByText('Gift amount: ₹ 3.00')).toBeVisible();
  await expect(page.getByText('Paid by: Cash')).toBeVisible();
});