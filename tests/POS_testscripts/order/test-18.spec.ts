import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
  await page.goto(response.url);
  await page.getByText('Sweater').click();
  await page.getByRole('heading', { name: 'Laundry' }).getByRole('button', { name: 'plus' }).click();
  await page.getByPlaceholder('Search customer, order').click();
  await page.getByPlaceholder('Search customer, order').fill('1');
  await page.getByText('[1]').click();
  await page.getByRole('button', { name: ' Payment' }).click();
  await page.getByRole('button', { name: 'Cash' }).click();
  await page.getByRole('button', { name: 'Create order ' }).click();

  const orderNumberElement = await page.getByRole('heading', { name: 'FIRST STORE-' });
  const orderNumberText = await orderNumberElement.innerText();
  const regex = /FIRST STORE-(\d+)/;
  const match = regex.exec(orderNumberText);
  const orderNumber = match ? match[1] : null;
  console.log(orderNumber);

  await page.locator('label:nth-child(7) > .ant-segmented-item-label').click();
  await page.getByRole('button', { name: 'barcode Order ID' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
  const copiedOrderID = await page.evaluate(async () => {
    const clipboardText = await navigator.clipboard.readText();
    return clipboardText.trim(); 
    });
  
  await page.getByRole('tab', { name: 'search' }).locator('span').first().click();
  await page.getByPlaceholder('Search customer, order').click();
  await page.getByPlaceholder('Search customer, order').fill(copiedOrderID);
  await expect(page.getByText(`#${orderNumber} [1] test +91 98765 53210`)).toBeAttached();
  
  });
