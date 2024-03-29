import { test, expect } from '@playwright/test';
//cancel order
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

  await page.getByText('24', { exact: true }).click();
  await page.getByRole('button', { name: 'Complete & Close' }).click();
  await page.getByPlaceholder('Search customer, order').click();
  await page.getByText('[1] test ').click();
  await page.getByRole('button', { name: ' Payment' }).click();
  await page.getByRole('button', { name: 'cash' }).click();
  await page.getByRole('button', { name: 'Create order' }).click();
  await page.getByRole('tabpanel', { name: 'Customer receipt' }).press('ArrowDown');
  await page.getByRole('tabpanel', { name: 'Customer receipt' }).press('ArrowDown');
  await expect(page.getByText(`Estimated collection 24/${nextMonth}/2023`)).toBeVisible();
  await page.getByRole('img', { name: 'hourglass' }).locator('svg').click();
  await page.getByRole('button', { name: 'close-circle Cancel order' }).click();
  await page.getByPlaceholder('Cancellation note').click();
  await page.getByPlaceholder('Cancellation note').fill('cancel now');
  await page.getByRole('button', { name: 'Cancel order', exact: true }).click();
  await expect(page.getByText('Order has been cancelled')).toBeAttached();
  await page.getByRole('img', { name: 'file-text' }).locator('svg').click();
  await expect(page.getByRole('heading', { name: 'VOID' })).toBeVisible();
  await page.getByRole('img', { name: 'history' }).locator('svg').click();
  await expect(page.getByText('Order cancelled | Note: cancel now | ₹ 153.00 refunded by Cash | Note: order can')).toBeVisible();
});