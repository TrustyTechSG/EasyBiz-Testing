import { test, expect } from '@playwright/test';
//change collection date rescheduled
test('test', async ({ page }) => {
  const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
  await page.goto(response.url);
  await page.getByPlaceholder('Search customer, order').click();
  await page.getByPlaceholder('Search customer, order').fill('1');
  await page.getByText('[1] test').click();
  await page.getByText('Leather Jacket').click();
  await page.getByRole('button', { name: 'plus', exact: true }).click();
  await page.getByRole('button', { name: 'Close', exact: true }).click();
  await page.getByRole('button', { name: 'Payment' }).click();
  await page.getByRole('button', { name: 'cash' }).click();
  await page.getByRole('button', { name: 'Create order' }).click();
  await page.getByRole('dialog').getByRole('img', { name: 'calendar' }).locator('svg').click();
  await page.getByRole('button', { name: 'calendar Reschedule' }).click();
  await page.getByRole('button', { name: 'right' }).click();
  await page.getByText('21').click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('Estimated collection')).toBeTruthy();
  });