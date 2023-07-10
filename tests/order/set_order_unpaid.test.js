import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
  await page.goto(response.url);
  await page.getByText('Punjabi Suit').click();
  await page.getByRole('heading', { name: 'Dry Clean' }).getByRole('button', { name: 'plus' }).click();
  await page.getByRole('button', { name: 'right Line item details' }).click()
  await page.getByRole('button', { name: 'subnode Add-on' }).click();
  await page.getByRole('listitem').filter({ hasText: 'HANG STRAIGHT[H/S]' }).getByRole('button', { name: 'plus' }).click();
  await page.getByRole('button', { name: 'tags Accessory' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Lining0 pcs' }).getByRole('button', { name: 'plus' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
  await expect(page.getByRole('listitem').filter({ hasText: '#1 Punjabi Suit₹22.00x1 set₹22.00Dry CleanAdd-on: HANG STRAIGHTAccessory: Lining' })).toBeVisible();
  await page.getByPlaceholder('Search customer, order').click();
  await page.getByText('[1] test +91 98765 53210').click();
  await expect(page.getByText('Payable Amount₹22.00')).toBeVisible();
  await page.getByRole('button', { name: 'Payment' }).click();
  await page.getByRole('button', { name: 'Unpaid'}).click();
  await page.getByRole('button', { name: 'Create order' }).click();
  await page.getByRole('tab', { name: 'Internal receipt' }).click();
  await expect(page.getByText('Punjabi Suit - Dry ₹ 22.00 x 1/set ₹ 22.00 Clean')).toBeVisible();
  await expect(page.getByRole('tabpanel', { name: 'Internal receipt' }).getByText('- Add-on: HANG STRAIGHT x 1')).toBeVisible();
  await expect(page.getByText('Subtotal ₹ 22.00')).toBeVisible();
  await expect(page.getByRole('heading', { name: '(PENDING)' })).toBeVisible();
  await page.locator('div').filter({ hasText: /^Customer receipt$/ }).first().click();
  await expect(page.getByRole('heading', { name: '(PENDING)' })).toBeVisible();
  await expect(page.getByText('Customer name test')).toBeVisible();
  await expect(page.getByText('Customer tel +91 98765 53210')).toBeVisible();
  await expect(page.getByText('Punjabi Suit ₹ 22.00 x 1/set ₹ 22.00')).toBeVisible();
  await expect(page.getByText('- Dry Clean')).toBeVisible();
  await expect(page.getByRole('tabpanel', { name: 'Customer receipt' }).getByText('- Add-on: HANG STRAIGHT x 1')).toBeVisible();
  await expect(page.getByRole('tabpanel', { name: 'Customer receipt' }).getByText('- Accessory: Lining x 1')).toBeVisible();
  await expect(page.getByText('Subtotal 2/pcs ₹ 22.00')).toBeVisible();
  await expect(page.getByText('anniversary offer (2%) (₹ 0.44)')).toBeVisible();
  await expect(page.getByText('GST 2% ₹ 0.43')).toBeVisible();
  await expect(page.getByText('Total (inclusive of GST) ₹ 22.00')).toBeVisible();
  await expect(page.getByText('Outstanding ₹ 22.00')).toBeVisible();

});