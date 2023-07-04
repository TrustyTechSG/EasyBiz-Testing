import { test, expect } from '@playwright/test';
//Disable the active promotion
test('test', async ({ page }) => {
  const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
  await page.goto(response.url);
  await page.getByRole('switch', { name: 'Enabled Disabled' }).click();
  await expect(page.getByText('anniversary offer(2% off)')).toBeHidden();
});
