import { test, expect } from '@playwright/test';
//Store outstanding orders
test('test', async ({ page }) => {
  const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
  await page.goto(response.url)
  await page.getByRole('tab', { name: 'search' }).locator('svg').click();
  await page.getByText('#01792 [1] test +91 98765 53210').click();
  await page.getByRole('img', { name: 'hourglass' }).locator('path').click();
  await expect(page.getByRole('listitem').filter({ hasText: 'Pending' })).toBeVisible();
});