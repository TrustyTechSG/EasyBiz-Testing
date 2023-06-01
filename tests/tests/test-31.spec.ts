import { test, expect } from '@playwright/test';
//credit history
test('test', async ({ page }) => {
  const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
  await page.goto(response.url);
  await page.getByText('Sweater').click();
  await page.getByRole('heading', { name: 'Laundry' }).getByRole('button', { name: 'plus' }).click();
  await page.getByText('[1] test ').click();
  await page.getByRole('tab', { name: 'wallet' }).locator('span').first().click();
  await page.getByRole('button', { name: 'history Credit history' }).click();
  await expect(page.getByText('Credit History (test)')).toBeTruthy();
});