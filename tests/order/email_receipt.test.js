import { test, expect } from '@playwright/test';
//email receipt
test('test', async ({ page }) => {
  const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
  await page.goto(response.url);
  await page.getByRole('button', { name: 'number', exact: true }).click();
  await page.getByRole('button', { name: '1', exact: true }).click();
  await page.getByText('[1] test').click();
  await page.getByText('Business Jacket').click();
  await page.getByRole('heading', { name: 'Dry Clean' }).getByRole('button', { name: 'plus' }).click();
  await page.getByRole('button', { name: 'Payment' }).click();
  await page.getByRole('button', { name: 'cash' }).click();
  await page.getByRole('button', { name: 'Create order' }).click();
  await page.getByRole('button', { name: 'mail Email' }).click();
  await page.getByPlaceholder('Recipient email address').click();
  await page.getByPlaceholder('Recipient email address').fill('aswinijagan2002@gmail.com');
  await page.getByRole('button', { name: 'send Send' }).click();
  await expect(page.getByText('Email delivered to aswinijagan2002@gmail.com')).toBeVisible();
})