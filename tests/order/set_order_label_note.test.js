import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
  await page.goto(response.url)
  await page.getByText('Punjabi Suit').click();
  await page.getByRole('heading', { name: 'Dry Clean' }).getByRole('button', { name: 'plus' }).click();
  await page.getByPlaceholder('Search customer, order').click();
  await page.getByPlaceholder('Search customer, order').fill('test');
  await page.getByText('[1] test +91 98765 53210').click();
  await page.getByRole('button', { name: 'Payment' }).click();
  await page.getByRole('button', { name: 'cash' }).click();
  await page.getByRole('button', { name: 'Create order' }).click();
  await page.getByRole('img', { name: 'tag' }).locator('svg').click();
  await page.getByRole('button', { name: 'edit Label Note' }).click();
  await page.getByPlaceholder('Note', { exact: true }).click();
  await page.getByPlaceholder('Note', { exact: true }).fill('label note');
  await page.getByRole('button', { name: 'Update' }).click();
  await expect(page.getByText('Note updated')).toBeVisible();
  await page.getByRole('img', { name: 'file-text' }).locator('path').click();
  await expect(page.getByText('** label note')).toBeVisible();
});