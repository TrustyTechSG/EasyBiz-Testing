import { test,expect } from '@playwright/test';
//select customer is mandatory 
test('test', async ({ page }) => {
  const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
  await page.goto(response.url);
  await page.getByText('Kebaya').click();
  await page.getByRole('button', { name: '0 pcs' }).click();
  await page.getByRole('button', { name: '1', exact: true }).click();
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'Payment' }).click();
  await expect(page.getByText('Please select customer')).toBeVisible();
 })