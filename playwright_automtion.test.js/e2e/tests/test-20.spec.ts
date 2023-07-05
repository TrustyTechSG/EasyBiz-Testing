import { test, expect } from '@playwright/test';
// bag service 
test('test', async ({ page }) => {
  const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
  await page.goto(response.url);
  await page.locator('.ant-space-item > .ant-btn').first().click();
  await page.getByText('Bag Service', { exact: true }).click(); 
  await page.getByText('Bag', { exact: true }).click();
  await page.getByRole('button', { name: 'ADIDAS' }).click();
  await page.getByRole('textbox').nth(1).fill('7');
  await page.getByRole('button', { name: 'Next right' }).click();
  await page.getByRole('button', { name: 'BLACK' }).click();
  await page.getByRole('button', { name: 'Next right' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Interior General Cleaning' }).getByRole('button', { name: 'plus' }).click();
  await page.getByRole('button', { name: 'Next right' }).click();
  await page.getByText('11').click();
  await page.getByRole('button', { name: 'Complete & Close' }).click();
  await page.getByPlaceholder('Search customer, order').click();
  await page.getByText('[1]').click();
  await page.getByRole('button', { name: 'Payment' }).click();
  await page.getByRole('button', { name: 'Cash' }).click();
  await page.getByRole('button', { name: 'Create order' }).click();
  const locator = page.getByText('Bag x 1 ₹ 30.00');
  await expect(locator).toBeTruthy();  
});