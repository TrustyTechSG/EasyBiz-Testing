import { test,expect } from '@playwright/test';
//unpaid empty order -no label generated yet
test('test', async ({ page }) => {
  const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
  await page.goto(response.url);
  await page.getByPlaceholder('Search customer, order').click();
  await page.getByPlaceholder('Search customer, order').fill('1');
  await page.getByText('[1] test').click();
  await page.getByRole('button', { name: 'Payment' }).click();
  await page.getByRole('button', { name: 'Unpaid' }).click();
  await page.getByRole('button', { name: 'Create order' }).click();
  await expect(page.getByText('Customer name test')).toBeVisible();
  await expect(page.getByText('Customer tel +91 98765 53210')).toBeVisible();
  await page.getByRole('img', { name: 'tag' }).locator('svg').click();
  await expect(page.getByText('No label generated yet')).toBeVisible();
 })