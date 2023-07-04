import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
  await page.goto(response.url);
  await page.getByRole('button', { name: 'plus', exact: true }).click();
  await page.locator('input[type="text"]').nth(2).click();
  await page.locator('input[type="text"]').nth(2).fill('New one');
  await page.getByPlaceholder('1 (702) 123-4567').click();
  await page.getByPlaceholder('1 (702) 123-4567').fill('+91 76767-67676');
  await page.getByRole('button', { name: 'Add account' }).click();
  await page.getByRole('button', { name: 'edit', exact: true }).click();
  await page.getByRole('button', { name: 'calendar Set' }).click();
  await page.getByRole('dialog', { name: 'Birthday' }).getByRole('button', { name: '2' }).click();
  await page.getByRole('button', { name: '0', exact: true }).click();
  await page.getByRole('button', { name: '0', exact: true }).click();
  await page.getByRole('dialog', { name: 'Birthday' }).getByRole('button', { name: '2' }).click();
  await page.getByRole('button', { name: '0', exact: true }).click();
  await page.getByRole('button', { name: '1', exact: true }).click();
  await page.getByRole('dialog', { name: 'Birthday' }).getByRole('button', { name: '2' }).click();
  await page.getByRole('button', { name: '1', exact: true }).click();
  await page.getByRole('button', { name: 'OK', exact: true }).click();
  await page.getByRole('button', { name: 'loading Save' }).click();
  await expect(page.getByText('Profile updated')).toBeVisible();
  await expect(page.getByText('New one +91 76767 67676')).toBeAttached();
  });