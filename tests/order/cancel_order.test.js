import { test, expect } from '@playwright/test';
//cancel order
test('test', async ({ page }) => {
  const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
  await page.goto(response.url);
  await page.getByPlaceholder('Search customer, order').click();
  await page.getByPlaceholder('Search customer, order').fill('test');
  await page.getByText('[1] test').click();
  await page.getByText('Sweater').click();
  await page.getByRole('heading', { name: 'Laundry' }).getByRole('button', { name: 'plus' }).click();
  await page.getByRole('button', { name: ' Payment' }).click();
  await page.getByRole('button', { name: 'Cash' }).click();
  await page.getByRole('button', { name: 'Create order' }).click();
  await page.getByRole('img', { name: 'hourglass' }).locator('svg').click();
  await page.getByRole('button', { name: 'close-circle Cancel order' }).click();
  await page.getByPlaceholder('Cancellation note').click();
  await page.getByPlaceholder('Cancellation note').fill('cancellation note');
  await page.getByRole('button', { name: 'Cancel order', exact: true }).click();
  await page.getByRole('img', { name: 'file-text' }).locator('path').click();
  await expect(page.getByRole('heading', { name: 'VOID' })).toBeVisible();
  await expect(page.getByText('Customer name test')).toBeVisible(); 
  await expect(page.getByText('Customer tel +91 98765 53210')).toBeVisible();  
  await expect(page.getByText('Sweater ₹ 6.00 x 1/pcs ₹ 6.00')).toBeVisible(); 
  await expect(page.getByText('- L')).toBeVisible(); 
  await expect(page.getByText('Subtotal 1/pcs ₹ 10.00')).toBeVisible();
  await page.getByRole('dialog').getByRole('img', { name: 'credit-card' }).locator('svg').click();
  await expect(page.getByText('Total OutstandingVoided')).toBeVisible();
//outstanding-void
});