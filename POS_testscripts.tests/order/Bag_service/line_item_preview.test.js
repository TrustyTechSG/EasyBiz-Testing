import { test, expect } from '@playwright/test';
//Line item preview
test('test', async ({ page }) => {
  const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
  await page.goto(response.url);
  await page.locator('.ant-space-item > .ant-btn').first().click();
  await page.getByText('Bag Service').click();
  await page.getByText('Bag', { exact: true }).click();
  await page.getByRole('button', { name: 'MULBERRY' }).click();
  await page.getByRole('textbox').nth(1).fill('7');
  await page.getByRole('button', { name: 'Next right' }).click();
  await page.getByRole('button', { name: 'WHITE' }).click();
  await page.getByRole('button', { name: 'Next right' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Deep Cleaning[DC]' }).getByRole('button', { name: 'plus' }).click();
  await page.getByRole('button', { name: 'Next right' }).click();
  await page.getByText('15', { exact: true }).click();
  await page.getByRole('button', { name: 'Complete & Close' }).click();
  await page.getByPlaceholder('Search customer, order').click();
  await page.getByText('[1] test ').click();
  await expect(page.getByText('Deep Cleaning,Brand: MULBERRY,Serial No.:7,Colour: WHITE')).toHaveText;
  await expect(page.getByText('Item total: ₹150.00')).toHaveValue;
  await expect(page.getByText('#1 Bag₹150.00x1 ₹150.00')).toHaveText;
  await expect(page.getByText('Deep Cleaning').nth(1)).toHaveText;
  await expect(page.getByText('Brand: MULBERRY')).toHaveText;
  await expect(page.getByText('Serial No.: 7')).toHaveText;
  await expect(page.getByText('Colour: WHITE')).toHaveText;
});