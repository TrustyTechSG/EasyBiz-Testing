import { test, expect } from '@playwright/test';
//close button
test('test', async ({ page }) => {
  const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
  await page.goto(response.url)
  await page.getByText('Sweater').click();
  await page.getByRole('heading', { name: 'Laundry' }).getByRole('button', { name: 'plus' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
  await expect(page.getByTitle('1').locator('span').first()).toBeVisible();
  await expect(page.getByText('#1 Sweater₹6.00x1 pcs₹6.00Laundry')).toBeVisible();
});