import { test, expect } from '@playwright/test';
//edit cash in amount
test('test', async ({ page }) => {
  const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
  await page.goto(response.url);
  await page.getByRole('button', { name: 'container' }).click();
  await page.getByRole('button', { name: 'plus Cash in' }).click();
  await page.getByRole('button', { name: '1' }).click();
  await page.getByRole('button', { name: '1' }).click();
  await page.getByRole('button', { name: 'Preview' }).click();
  await page.getByRole('button', { name: 'Edit' }).click();
  await page.getByRole('button', { name: '1' }).click();
  await page.getByRole('button', { name: '0', exact: true }).click();
  await page.getByRole('button', { name: 'Preview' }).click();
  await page.getByPlaceholder('Note').click();
  await page.getByPlaceholder('Note').fill('cash in note');
  await page.getByRole('button', { name: 'Confirm cash in' }).click();
  await expect(page.getByRole('heading', { name: 'Expected in Drawer' })).toHaveValue;
});