import { test, expect } from '@playwright/test';
//photo deleted
test('test', async ({ page }) => {
  const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
  await page.goto(response.url)
  await page.getByPlaceholder('Search customer, order').click();
  await page.getByPlaceholder('Search customer, order').fill('test');
  await page.getByText('[1] test').click();
  await page.getByText('Leather Jacket').click();
  await page.getByRole('button', { name: 'plus', exact: true }).click();
  await page.getByRole('button', { name: 'Payment' }).click();
  await page.getByRole('button', { name: 'cash' }).click();
  await page.getByRole('button', { name: 'Create order' }).click();
  await page.getByRole('img', { name: 'camera' }).locator('svg').click();
  await page.locator('#rc-tabs-1-panel-photo').getByRole('switch', { name: 'Enabled Disabled' }).click();
  await page.locator('video').click();
  await page.locator('#rc-tabs-1-panel-photo img').click();
  await page.locator('div').filter({ hasText: /^Delete photo$/ }).locator('button').click();
  await page.getByText('Photo deleted').click();
  });