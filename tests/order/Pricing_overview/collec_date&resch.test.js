import { test, expect } from '@playwright/test';
//change collection date rescheduled
test('test', async ({ page }) => {
  const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
  await page.goto(response.url);
  await page.getByPlaceholder('Search customer, order').click();
  await page.getByPlaceholder('Search customer, order').fill('test');
  await page.getByText('[1] test').click();
  await page.getByText('Leather Jacket').click();
  await page.getByRole('button', { name: 'plus', exact: true }).click();
  await page.getByRole('button', { name: 'Close', exact: true }).click();
  await page.getByRole('button', { name: 'Payment' }).click();
  await page.getByRole('button', { name: 'cash' }).click();
  await page.getByRole('button', { name: 'Create order' }).click();
  await page.getByRole('dialog').getByRole('img', { name: 'calendar' }).locator('svg').click();
  await page.getByRole('button', { name: 'calendar Reschedule' }).click();
  await page.getByRole('button', { name: 'right', exact: true }).click();
  var currentDate = new Date();
  currentDate.setMonth(currentDate.getMonth() + 1);
  var nextMonth = currentDate.toLocaleString('en-US', { month: '2-digit' });
  console.log(nextMonth);

  await page.getByText('21').click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('Estimated collection')).toBeVisible();
  expect(page.getByText('Collect at FIRST STORE')).toBeVisible();
  await page.getByRole('img', { name: 'file-text' }).locator('svg').click();
  expect(page.getByRole('heading', { name: '(PAID)' })).toBeVisible();
  expect(page.getByText('Customer name: test')).toBeVisible();
  expect(page.getByText('Customer tel: +91 98765 53210')).toBeVisible();
  expect(page.getByText('Leather Jacket ₹ 60.00 x 1/pcs ₹ 60.00')).toBeVisible();
  expect(page.getByText('- Dry Clean')).toBeVisible();
  expect(page.getByText('Pay by Cash (₹ 61.20)')).toBeVisible();
  await expect(page.getByText(`Estimated collection 21/${nextMonth}/2023`)).toBeVisible();

});