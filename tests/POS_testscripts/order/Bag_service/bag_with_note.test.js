import { test, expect } from '@playwright/test';
//bag with note
test('test', async ({ page }) => {
  const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
  await page.goto(response.url);
  await page.locator('.ant-space-item > .ant-btn').first().click();
  await page.getByText('Bag Service').click();
  await page.getByText('Bag', { exact: true }).click();
  await page.getByRole('button', { name: 'MULBERRY' }).click();
  await page.getByRole('textbox').nth(1).fill('5');
  await page.getByRole('button', { name: 'Next right' }).click();
  await page.getByRole('button', { name: 'METALLIC SILVER' }).click();
  await page.getByRole('button', { name: 'Next right' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Coating[COAT]₹50.00 ~' }).getByRole('button', { name: 'plus' }).click();
  await page.getByRole('button', { name: 'edit Note' }).click();
  await page.getByPlaceholder('Note', { exact: true }).click();
  await page.getByPlaceholder('Note', { exact: true }).fill('default colour');
  await page.getByRole('button', { name: 'OK', exact: true }).click();
  await page.getByRole('button', { name: 'Next right' }).click();
  await page.getByRole('button', { name: 'right' }).click();
  await page.getByTitle('').locator('div').nth(2).click();
  await page.getByRole('button', { name: 'Complete & Close' }).click();
  await page.getByPlaceholder('Search customer, order').click();
  await page.getByPlaceholder('Search customer, order').fill('test');
  await page.getByText('[1] test').click();
  await page.getByRole('button', { name: 'Payment' }).click();
  await page.getByRole('button', { name: 'Cash' }).click();
  await page.getByRole('button', { name: 'Create order' }).click();
  expect(page.getByText('Customer name: test')).toBeTruthy()
  expect(page.getByText('Customer tel: +91 98765 53210')).toBeTruthy()
  expect(page.getByText('- Estimated completion: 25/06/2023 (Su)')).toBeTruthy()
  expect(page.getByText('- Coating ₹ 50.00')).toBeTruthy()
  expect(page.getByText('** default colour')).toBeTruthy()
  expect(page.getByText('- Brand: MULBERRY')).toBeTruthy()
  expect(page.getByText('- Serial No.: 5')).toBeTruthy()
  expect(page.getByText('- Colour: METALLIC SILVER')).toBeTruthy()
  expect(page.getByText('Subtotal 1/pcs ₹ 50.00')).toBeTruthy()
  expect(page.getByText('Total (inclusive of GST) ₹ 51.00')).toBeTruthy()
  expect(page.getByText('Pay by Cash (₹ 51.00)')).toBeTruthy()
  expect(page.getByText('Return type: Self collection at FIRST STORE')).toBeTruthy()
  await page.getByRole('img', { name: 'tag' }).locator('svg').click();
  expect(page.getByText('test Bag [COAT]')).toHaveText; //lab4el
});