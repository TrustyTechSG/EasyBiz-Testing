import { test, expect } from '@playwright/test';
//bagservice redo
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
  await page.getByText('15', { exact: true }).click();
  await page.getByRole('button', { name: 'Complete & Close' }).click();
  await page.getByPlaceholder('Search customer, order').click();
  await page.getByText('[1] test ').click();
  await page.getByRole('button', { name: 'credit-card Payment' }).click();
  await page.getByRole('button', { name: 'dollar cash' }).click();
  await page.getByRole('button', { name: 'Create order' }).click();
  await page.locator('.ant-segmented-item-icon > .ant-badge > .anticon > svg').click();
  await page.getByLabel('Select all').check();
  await page.getByRole('button', { name: 'check Discharge (1/1)' }).click();
  await page.getByRole('button', { name: 'OK', exact: true }).click();
  await expect(page.getByText('Order discharged')).toHaveText;
});