import { test, expect } from '@playwright/test';
//messages
test('test', async ({ page }) => {
const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
await page.goto(response.url)
await page.getByRole('button', { name: 'shop FIRST STORE' }).click();
await page.getByRole('button', { name: 'question Help' }).click();
await page.frameLocator('iframe[name="intercom-messenger-frame"]').getByTestId('messages').click();
await page.frameLocator('iframe[name="intercom-messenger-frame"]').getByTestId('send-a-message-button').click();
await expect(page.frameLocator('iframe[name="intercom-messenger-frame"]').getByText('Leave your feedback or message to contact our support team here 👨🏻‍💻👩🏻‍💻')).toBeVisible();
});