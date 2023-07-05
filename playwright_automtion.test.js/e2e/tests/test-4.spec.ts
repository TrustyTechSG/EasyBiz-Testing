//index filter
import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
  await page.goto(response.url);
  await page.getByRole('button', { name: 'K', exact: true }).click();
  await page.getByText('Baju kurung').click();
  await page.getByRole('heading', { name: 'Dry Clean ' }).getByRole('button', { name: 'plus' }).click();
  await expect(page.getByText('Baju kurung')).toBeTruthy();

});