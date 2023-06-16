import { test, expect } from '@playwright/test';
//help
test('test', async ({ page }) => {
  const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
await page.goto(response.url)
await page.getByRole('button', { name: 'shop FIRST STORE' }).click();
await page.getByRole('button', { name: 'question Help' }).click();
await page.frameLocator('iframe[name="intercom-messenger-frame"]').getByRole('button', { name: 'Send us a message We will reply as soon as we can' }).click();
await expect(page.frameLocator('iframe[name="intercom-messenger-frame"]').getByText('Leave your feedback or message to contact our support team here 👨🏻‍💻👩🏻‍💻')).toHaveText
});