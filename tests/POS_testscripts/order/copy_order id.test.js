import { test, expect } from '@playwright/test';
// copy order id
test('test', async ({ page }) => {
  const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
  await page.goto(response.url);
  await page.getByText('Sweater').click();
  await page.getByRole('heading', { name: 'Laundry' }).getByRole('button', { name: 'plus' }).click();
  await page.getByPlaceholder('Search customer, order').click();
  await page.getByPlaceholder('Search customer, order').fill('1');
  await page.getByText('[1]').click();
  await page.getByRole('button', { name: ' Payment' }).click();
  await page.getByRole('button', { name: 'Cash' }).click();
  await page.getByRole('button', { name: 'Create order ' }).click();
  await page.locator('label:nth-child(7) > .ant-segmented-item-label').click();
  await page.getByRole('button', { name: 'barcode Order ID' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('tab', { name: 'search' }).locator('span').first().click();
  await page.getByPlaceholder('Search customer, order').click();
  await page.getByPlaceholder('Search customer, order').fill('');
  await expect(page.getByRole('heading', { name: 'Order history by searching ' })).toBeTruthy();
});
  