import { test, expect } from '@playwright/test';
// cash out
test('test', async ({ page }) => {
  const response = await (await fetch(`https://us-central1-easybus-clean-cloud.cloudfunctions.net/testing?realm=JewIJxIl06qRVrOnhBL9&code=store1&method=pos_sign_in`)).json();
  await page.goto(response.url);
  await page.getByRole('button', { name: 'container' }).click();
  await page.getByRole('button', { name: 'minus Cash out' }).click();
  await page.getByRole('dialog').getByRole('button', { name: '1' }).click();
  await page.getByRole('button', { name: '0', exact: true }).click();
  await page.getByRole('button', { name: 'Preview' }).click();
  await page.getByPlaceholder('Note').click();
  await page.getByPlaceholder('Note').fill('cashout rs 2');
  await page.getByRole('button', { name: 'Confirm cash out' }).click();

  let previousValue; 
  const expectedInDrawerHeading = await page.getByText('Expected in Drawer₹');
  const initialValue = await expectedInDrawerHeading.innerText();
  const initialNumericValue = parseFloat(initialValue.replace(/[^0-9.]/g, '')); 
  console.log('total before cash out:'+initialValue);
  if (!isNaN(initialNumericValue)) {
  previousValue = initialNumericValue;
}

 const updatedValue = await expectedInDrawerHeading.innerText();
 const updatedNumericValue = parseFloat(updatedValue.replace(/[^0-9.]/g, '')); 
 console.log(updatedNumericValue);
 const updatedValueMinus10 = updatedNumericValue - 10;
 console.log('after cash out: ' +updatedValueMinus10);
 const formattedValue = updatedValueMinus10.toLocaleString('en-US');
 console.log(formattedValue);
 await expect(page.getByText(`Expected in Drawer₹${formattedValue}`)).toBeVisible();
});