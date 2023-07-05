import { test, expect } from '@playwright/test';
// collection sur charge
test('test', async ({ page }) => {
  const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
  await page.goto(response.url);
  await page.getByText('Sweater').click();
  await page.getByRole('heading', { name: 'Laundry' }).getByRole('button', { name: '0 pcs' }).click();
  await page.getByRole('button', { name: '1', exact: true }).click();
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByPlaceholder('Search customer, order').click();
  await page.getByPlaceholder('Search customer, order').fill('1');
  await page.getByText('[1] test').click();
  await page.getByRole('button', { name: 'Payment' }).click();
  await page.getByRole('button', { name: 'cash' }).click();
  await page.getByRole('button', { name: 'Create order' }).click();
  await page.getByRole('dialog').getByRole('img', { name: 'calendar' }).locator('svg').click();
  await page.getByRole('button', { name: 'calendar Reschedule' }).click();
  await page.getByRole('button', { name: 'right' }).click();
  await page.getByText('15').click();
  await page.getByRole('button', { name: 'edit', exact: true }).click();
  await page.getByRole('tooltip', { name: ' percentage' }).getByRole('button', { name: '2' }).click();
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('img', { name: 'file-text' }).locator('path').click();
  expect(page.getByText('Customer name: test')).toBeTruthy();
  expect(page.getByText('Customer tel: +91 98765 53210')).toBeTruthy();
  expect(page.getByText('Return type: Self collection at FIRST STORE')).toBeTruthy();
  expect(page.getByText('Sweater ₹ 6.00 x 1/pcs ₹ 6.00')).toBeTruthy();
  expect(page.getByText('- L')).toBeTruthy();


});