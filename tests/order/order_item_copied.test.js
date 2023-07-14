import { test, expect } from '@playwright/test';
// copy the order item for next order
test('test', async ({ page }) => {
  const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
  await page.goto(response.url);
  await page.locator('.ant-space-item > .ant-btn').first().click();
  await page.getByText('Bag Service').click();
  await page.getByText('Bag', { exact: true }).click();
  await page.getByRole('button', { name: 'ADIDAS' }).click();
  await page.getByRole('textbox').nth(1).fill('8');
  await page.getByRole('button', { name: 'Next right' }).click();
  await page.getByRole('button', { name: 'SILVER', exact: true }).click();
  await page.getByRole('button', { name: 'Next right' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Deep Cleaning' }).getByRole('button', { name: 'plus' }).click();
  await page.getByRole('button', { name: 'Next right' }).click();
  await page.getByRole('button', { name: 'Skip & Close' }).click();
  await page.getByPlaceholder('Search customer, order').click();
  await page.getByText('[1] test').click();
  await page.getByRole('button', { name: 'Payment' }).click();
  await page.getByRole('button', { name: 'Cash' }).click();
  await page.getByRole('button', { name: 'Create order ' }).click();
  await page.getByRole('button', { name: 'copy' }).click();
  await page.getByRole('button', { name: 'OK', exact: true }).click();
  await expect(page.getByRole('list').locator('div').filter({ hasText: '#1 Bag₹150.00x1 ₹150.00Deep Cleaning₹150.00Brand: ADIDASSerial No.: 8Colour: SIL' }).first()).toBeVisible();
});