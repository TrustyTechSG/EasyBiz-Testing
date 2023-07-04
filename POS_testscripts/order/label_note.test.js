import { test, expect } from '@playwright/test';
//Label note
test('test', async ({ page }) => {
  const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
  await page.goto(response.url);
  await page.getByPlaceholder('Search customer, order').click();
  await page.getByPlaceholder('Search customer, order').fill('test');
  await page.getByText('[1] test').click();
  await page.getByText('T-Shirt').click();
  await page.getByRole('heading', { name: 'Laundry' }).getByRole('button', { name: 'plus' }).click();
  await page.getByRole('button', { name: ' Payment' }).click();
  await page.getByRole('button', { name: 'Cash' }).click();
  await page.getByRole('button', { name: 'Create order ' }).click();
  await page.getByRole('img', { name: 'tag' }).locator('svg').click();
  await page.getByRole('button', { name: 'edit Label Note' }).click();
  await page.getByPlaceholder('Note', { exact: true }).click();
  await page.getByPlaceholder('Note', { exact: true }).fill('label note are here');
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByText('* label note are here', { exact: true }).click();
  await expect(page.getByText('* label note are here', { exact: true })).toBeTruthy();
});