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
  await expect(page.getByText('New account created')).toBeTruthy();
});