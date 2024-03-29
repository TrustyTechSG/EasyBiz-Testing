import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
  await page.goto(response.url);
  await page.getByText('HOUSEHOLD & BEDDING').click();
  await page.getByText('Mattress Protector').click();
  await page.getByRole('button', { name: 'plus Add' }).click();
  await page.getByText('kg').click();
  await page.getByText('Laundry').click();
  await page.getByRole('button', { name: 'Add to order' }).click();
  await page.getByRole('button', { name: '₹0.00' }).click();
  await page.getByRole('button', { name: '1', exact: true }).click();
  await page.getByRole('button', { name: '1', exact: true }).click();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByPlaceholder('Search customer, order').click();
  await page.getByPlaceholder('Search customer, order').fill('test');
  await page.getByText('[1] test +91 98765 53210').click();
  await page.getByRole('button', { name: 'calendar'}).click();
  await page.getByText('Home delivery').click();
  await page.getByRole('button', { name: 'right Address:' }).click();
  await page.getByRole('button', { name: 'plus Add address' }).click();
  await page.locator('#rc_select_4').fill('613006');
  await page.getByText('Thanjavur, Tamil Nadu 613006, India').click();
  await page.getByText('Set as default address').click();
  await page.getByRole('button', { name: 'Add address' }).click();
  await expect(page.getByRole('button', { name: 'right Address: Thanjavur, Tamil Nadu 613006, India' })).toHaveText;
  await page.getByRole('button', { name: 'right', exact: true }).click();
  var currentDate = new Date();
  currentDate.setMonth(currentDate.getMonth() + 1);
  var nextMonth = currentDate.toLocaleString('en-US', { month: '2-digit' });
  console.log(nextMonth);
  await page.getByText('12', { exact: true }).click();
  await expect(page.getByText('Home delivery')).toBeVisible();
  await page.getByRole('button', { name: 'Payment' }).click();
  await page.getByRole('button', { name: 'cash' }).click();
  await page.getByRole('button', { name: 'Create order' }).click();
  await page.getByRole('tab', { name: 'Customer receipt' }).click();
  await expect(page.getByRole('heading', { name: '(PAID)' })).toBeVisible();
  await expect(page.getByText('Customer name test')).toBeVisible();
  await expect(page.getByText('Customer tel +91 98765 53210')).toBeVisible();
  await expect(page.getByText('Return type Home delivery')).toBeVisible();
  await expect(page.getByText('Mattress Protector ₹ 11.00 x 1/kg ₹ 11.00')).toBeVisible();
  await expect(page.getByText('- Laundry')).toBeVisible();
  await expect(page.getByText('Total (inclusive of GST) ₹ 11.00')).toBeVisible();
});