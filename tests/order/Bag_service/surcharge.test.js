import { test, expect } from '@playwright/test';
//surcharge
test('test', async ({ page }) => {
  const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
  await page.goto(response.url);
  await page.locator('.ant-space-item > .ant-btn').first().click();
  await page.getByText('Bag Service').click();
  await page.getByText('Bag', { exact: true }).click();
  await page.getByRole('button', { name: 'MULBERRY' }).click();
  await page.getByRole('textbox').nth(1).fill('7');
  await page.getByRole('button', { name: 'Next right' }).click();
  await page.getByRole('button', { name: 'WHITE' }).click();
  await page.getByRole('button', { name: 'Next right' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Deep Cleaning[DC]' }).getByRole('button', { name: 'plus' }).click();
  await page.getByRole('button', { name: 'Next right' }).click();
  await page.getByRole('button', { name: 'right' }).click();
  var currentDate = new Date();
  currentDate.setMonth(currentDate.getMonth() + 1);
  var nextMonth = currentDate.toLocaleString('en-US', { month: '2-digit' });
  console.log(nextMonth);
  await page.getByText('15', { exact: true }).click();
  await page.getByRole('button', { name: 'Complete & Close' }).click();
  await page.getByPlaceholder('Search customer, order').click();
  await page.getByText('[1] test ').click();
  await page.getByRole('button', { name: 'plus Surcharge' }).click();
  await page.getByRole('listitem').filter({ hasText: 'sur_charge' }).getByRole('button', { name: 'plus' }).click();
  await page.getByRole('button', { name: 'Payment' }).click();
  await page.getByRole('button', { name: 'cash' }).click();
  await page.getByRole('button', { name: 'Create order' }).click();
  await page.getByRole('tab', { name: 'Internal receipt' }).click();
  await page.getByRole('heading', { name: '(PAID)' }).click();
  await page.getByRole('tab', { name: 'Customer receipt' }).click();
  await expect(page.getByRole('heading', { name: '(PAID)' })).toBeVisible();
  await expect(page.getByText('Customer name test')).toBeVisible();
  await expect(page.getByText('Customer tel +91 98765 53210')).toBeVisible();
  await expect(page.getByRole('tabpanel', { name: 'Customer receipt' }).getByText('- Deep Cleaning ₹ 150.00')).toBeVisible();
  await expect(page.getByRole('tabpanel', { name: 'Customer receipt' }).getByText('Bag x 1 ₹ 150.00')).toBeVisible();
  await expect(page.getByRole('tabpanel', { name: 'Customer receipt' }).getByText('- Brand: MULBERRY')).toBeVisible();
  await expect(page.getByRole('tabpanel', { name: 'Customer receipt' }).getByText(`Estimated collection 15/${nextMonth}/2023`)).toBeVisible();
  await expect(page.getByRole('tabpanel', { name: 'Customer receipt' }).getByText('- Serial No.: 7')).toBeVisible();
  await expect(page.getByRole('tabpanel', { name: 'Customer receipt' }).getByText('- Colour: WHITE')).toBeVisible();
  await expect(page.getByRole('tabpanel', { name: 'Customer receipt' }).getByText('sur_charge ₹ 12.00')).toBeVisible();
  await expect(page.getByText(`Estimated collection 15/${nextMonth}/2023`)).toBeVisible();
  await page.getByRole('img', { name: 'tag' }).locator('svg').click(); //Label
  await expect(page.getByText('#1 Store received')).toBeVisible();
  await expect(page.getByText('test Bag [DC]')).toBeVisible();

});