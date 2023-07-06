import { test, expect } from '@playwright/test';
//Store outstanding orders
test('test', async ({ page }) => {
  const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
  await page.goto(response.url)
  await page.getByRole('tab', { name: 'search' }).click();
  await page.getByLabel('Store outstanding orders').check();
  await page.getByText('Earliest First').click();
  await expect(page.getByText('Search orders Store outstanding orders Most Recent First Earliest First')).toBeVisble();
});