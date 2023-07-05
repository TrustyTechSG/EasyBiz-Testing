import { test, expect } from '@playwright/test';
//cancel top up
test('test', async ({ page }) => {
  const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
  await page.goto(response.url);
  await page.getByRole('img', { name: 'wallet' }).locator('path').click();
  await page.getByPlaceholder('Search customer, order').click();
  await page.getByPlaceholder('Search customer, order').fill('test');
  await page.getByText('test +91 98765 53210').click();
  await page.getByRole('button', { name: 'history Credit history' }).click();
  await expect(page.getByText('cancel (Cancel transaction on 21/06/2023 10:46 (cancel top up))')).toHaveValue;
});