//update quantity
import { test, expect} from '@playwright/test';
// playwright.config.ts
{test('test', async ({ page }) => {
const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
await page.goto(response.url);
await page.getByPlaceholder('Search customer, order').click();
await page.getByPlaceholder('Search customer, order').fill('test');
await page.getByText('[1] test +91 98765 53210').click();
await page.getByText('T-Shirt').click();
await page.getByRole('heading', { name: 'Laundry' }).getByRole('button', { name: '0 pcs' }).click();
await page.getByRole('tooltip', { name: 'Laundry' }).getByRole('button', { name: '2' }).click();
await page.getByRole('button', { name: 'Add' }).click();
await expect(page.getByText('#1 T-Shirt₹6.00x2 pcs₹12.00')).toBeVisible();
await expect(page.getByText('Subtotal2 units₹12.00')).toBeVisible();
await page.getByRole('button', { name: 'Payment' }).click();
await page.getByRole('button', { name: 'cash' }).click();
await page.getByRole('button', { name: 'Create order' }).click();
await expect(page.getByText('T-Shirt ₹ 6.00 x 2/pcs ₹ 12.00')).toBeVisible();
await expect(page.getByText('- L')).toBeVisible();
await expect(page.getByText('Subtotal 2/pcs ₹ 12.00')).toBeVisible();
await expect(page.getByText('Pay by Cash (₹ 12.00)')).toBeVisible();
await expect(page.getByText('Customer name: test')).toBeVisible();
await expect(page.getByText('Customer tel: +91 98765 53210')).toBeVisible();

});
}
