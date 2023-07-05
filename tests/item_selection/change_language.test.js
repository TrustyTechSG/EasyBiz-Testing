import { test, expect } from '@playwright/test';
//change language
test('test', async ({ page }) => {
  const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
  await page.goto(response.url)
  await page.getByRole('button', { name: 'shop FIRST STORE' }).click();
  await page.getByRole('button', { name: 'translation Language' }).click();
  await page.getByRole('button', { name: '简体中文' }).click();
  await expect(page.getByText('低于最低价差额')).toBeVisible();
});