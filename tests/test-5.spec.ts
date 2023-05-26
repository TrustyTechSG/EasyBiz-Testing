//update quantity
import { test, expect} from '@playwright/test';
// playwright.config.ts
{test('test', async ({ page }) => {
const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
await page.goto(response.url);
await page.getByPlaceholder('Search customer, order').click();
await page.getByPlaceholder('Search customer, order').fill('1');
await page.getByText('[1] test').click();
await page.getByText('T-Shirt').click();
await page.getByRole('heading', { name: 'Laundry' }).getByRole('button', { name: '0 pcs' }).click();
await page.getByRole('tooltip', { name: 'Laundry' }).getByRole('button', { name: '2' }).click();
await page.getByRole('button', { name: 'Add' }).click();
await page.getByRole('heading', { name: 'Laundry' }).getByRole('button', { name: 'minus' }).click();
await expect(page.getByText('1 units')).toBeTruthy();
});
} 
