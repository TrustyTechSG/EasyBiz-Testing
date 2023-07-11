import { test, expect } from '@playwright/test';
//line item preview
test('test', async ({ page }) => {
  const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
  await page.goto(response.url);
  await page.getByText('T-Shirt').click();
  await page.getByRole('heading', { name: 'Laundry' }).getByRole('button', { name: 'plus' }).click();
  await page.getByRole('button', { name: 'Line item details' }).click();
  await page.getByRole('button', { name: 'Add-on' }).click();
  await page.getByRole('listitem').filter({ hasText: 'FOLD[F]' }).getByRole('button', { name: 'plus' }).click();
  await page.getByRole('button', { name: 'tags Accessory' }).click();
  await page.getByRole('listitem').filter({ hasText: 'With Alteration' }).getByRole('button', { name: 'plus' }).click();
  await page.getByRole('button', { name: 'Hi3' }).click();
  await expect(page.locator('div').filter({ hasText: /^#1 T-Shirt₹6\.00x1 pcs₹6\.00LaundryAdd-on: FOLDAccessory: With Alteration x 1\* Hi3$/ }).first()).toBeVisible();
});