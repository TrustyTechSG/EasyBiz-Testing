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
  await page.getByRole('button', { name: 'unpaid' }).click();
  await page.getByRole('button', { name: 'Create order' }).click();
  expect(page.getByText('Bag x 1 ₹ 30.00')).toBeTruthy();
  expect(page.getByRole('heading', { name: '(PENDING)' })).toBeTruthy();  
  expect(page.getByText('Customer name: test')).toBeTruthy();  
  expect(page.getByText('Customer tel: +91 98765 53210')).toBeTruthy();  
  expect(page.getByText('Bag x 1 ₹ 30.00')).toBeTruthy();  
  expect(page.getByText('- Interior General Cleaning ₹ 30.00')).toBeTruthy();  
  expect(page.getByText('- Brand: ADIDAS')).toBeTruthy();  
  expect(page.getByText('- Serial No.: 7')).toBeTruthy();  
  expect(page.getByText('- Colour: BLACK')).toBeTruthy();  
  expect(page.getByText('Outstanding ₹ 30.60')).toBeTruthy(); 
  await page.getByRole('img', { name: 'tag' }).locator('svg').click();
  expect(page.getByText('test Bag [IC]')).toBeTruthy()
  await page.getByRole('superscript').nth(1).click();
  expect(page.getByText('#1 Bag₹30.00x1 ₹30.00Estimated complete by Sun, Jun 11, 2023Interior General Cleaning')).toBeTruthy();
}); 