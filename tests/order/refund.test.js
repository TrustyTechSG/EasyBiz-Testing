import { test, expect } from '@playwright/test';
//refund amount for paid order
test('test', async ({ page }) => {
  const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
  await page.goto(response.url);
  await page.getByPlaceholder('Search customer, order').click();
  await page.getByPlaceholder('Search customer, order').fill('1');
  await page.getByText('[1]').click();
  await page.getByText('Sweater').click();
  await page.getByRole('heading', { name: 'Laundry' }).getByRole('button', { name: 'plus' }).click();
  await page.getByRole('button', { name: 'Payment' }).click();
  await page.getByRole('button', { name: 'Cash' }).click();
  await page.getByRole('button', { name: 'Create order' }).click();
  await page.getByRole('dialog').getByRole('img', { name: 'credit-card' }).locator('svg').click();
  await page.getByRole('button', { name: 'Refund' }).click();
  await page.getByPlaceholder('Refund note').click();
  await page.getByPlaceholder('Refund note').fill('Refund notes are here');
  await page.getByRole('dialog', { name: 'Payment Refund' }).getByRole('button', { name: 'Refund' }).click();
  await expect(page.getByText('Refunded')).toBeVisible();
});