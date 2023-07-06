import { test, expect } from '@playwright/test';
//order id
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
  await page.getByRole('button', { name: 'plus Surcharge' }).click();
  await page.getByRole('listitem').filter({ hasText: 'sur_charge' }).getByRole('button', { name: 'plus' }).click();
  await page.getByRole('button', { name: 'Payment' }).click();
  await page.getByRole('button', { name: 'cash' }).click();
  await page.getByRole('button', { name: 'Create order' }).click();
  const orderNumberElement = await page.getByRole('heading', { name: 'FIRST STORE-' });
  const orderNumberText = await orderNumberElement.innerText();
  const regex = /FIRST STORE-(\d+)/;
  const match = regex.exec(orderNumberText);
  const orderNumber = match ? match[1] : null;
  console.log(orderNumber);

  await page.getByRole('img', { name: 'history' }).locator('svg').click();
  await page.getByRole('button', { name: 'barcode Order ID' }).click();
  await expect(page.getByText('Order ID copied to your clipboard')).toHaveText;
  await page.getByRole('button', { name: 'Close' }).click();
  const copiedOrderID = await page.evaluate(async () => {
    const clipboardText = await navigator.clipboard.readText();
    return clipboardText.trim();
    });
  await page.getByRole('tab', { name: 'search' }).locator('span').first().click();
  await page.getByPlaceholder('Search customer, order').click();
  await page.getByPlaceholder('Search customer, order').fill(copiedOrderID);
  await expect(page.getByText(`#${orderNumber} [1] test +91 98765 53210`)).toBeVisible();
  });