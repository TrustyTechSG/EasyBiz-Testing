import { test, expect } from '@playwright/test';
//sur charge & discount
test('test', async ({ page }) => {
  const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
  await page.goto(response.url);
  await page.getByRole('button', { name: 'number', exact: true }).click();
  await page.getByRole('button', { name: '1', exact: true }).click();
  await page.getByRole('button', { name: 'Order No' }).click();
  await page.getByRole('button', { name: 'Close', exact: true }).click();
  await page.getByText('[1] test').click();
  await page.getByRole('button', { name: 'minus Discount' }).click();
  await page.getByRole('button', { name: 'plus', exact: true }).click();
  await page.getByRole('button', { name: 'plus Surcharge' }).click();
  await page.getByRole('listitem').filter({ hasText: 'sur_charge' }).getByRole('button', { name: 'plus' }).click();
  const locator = page.getByText('sur_chargeEdit₹12.00'); 
  await expect(locator).toBeVisible();
});