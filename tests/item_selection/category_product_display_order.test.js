//category and product display order
import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
await page.goto(response.url);
await page.getByPlaceholder('Search product').click();
await page.getByPlaceholder('Search product').fill('shawl');
await page.getByPlaceholder('Search product').press('Enter');
await page.getByText('Shawl').click();
await page.getByRole('heading', { name: 'Laundry' }).getByRole('button', { name: 'plus' }).click();
await expect (page.getByText('#1 Shawl')).toBeVisible();
});