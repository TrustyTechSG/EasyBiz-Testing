import { test, expect } from '@playwright/test';
//Article
test('test', async ({ page }) => {
const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
await page.goto(response.url)
await page.getByRole('button', { name: 'shop FIRST STORE' }).click();
await page.getByRole('button', { name: 'question Help' }).click();
await page.frameLocator('iframe[name="intercom-messenger-frame"]').getByRole('button', { name: 'Search for help' }).click();
await page.frameLocator('iframe[name="intercom-messenger-frame"]').getByRole('button', { name: 'Point of Sales [POS] Full cloud based POS for your chain stores 30 articles' }).click();
await page.frameLocator('iframe[name="intercom-messenger-frame"]').getByRole('button', { name: 'Search for help Search for help' }).click();
await page.frameLocator('iframe[name="intercom-messenger-frame"]').getByRole('textbox', { name: 'Search for help' }).fill('create ');
await page.frameLocator('iframe[name="intercom-messenger-frame"]').getByRole('button', { name: 'How to generate batch voucher ... "Batch voucher" > click "Create new batch". 2.' }).click();
await expect(page.frameLocator('iframe[name="intercom-messenger-frame"]').getByText('How to generate batch voucher').nth(1)).toHaveText
});