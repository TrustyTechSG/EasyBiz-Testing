import { test, expect } from '@playwright/test';
//Add kg item
test('test', async ({ page }) => {
  const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
  await page.goto(response.url);
  await page.getByText('LOAD WASH').click();
  await page.getByText('Load Wash - Per Kg').click();
  await page.getByRole('button', { name: 'plus Add' }).click();
  await page.getByRole('button', { name: '1', exact: true }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: '8', exact: true }).click();
  await page.getByRole('button', { name: 'Add', exact: true }).click();
  await expect(page.getByRole('listitem').filter({ hasText: '#1 Load Wash - Per Kg₹7.00x1 kg₹7.00Duvets & Bulky Items8 pcs' })).toBeVisible();
});
