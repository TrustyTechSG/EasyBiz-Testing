import { expect } from '@playwright/test';

export default async ({ page }) => {
  
 await page.locator('[placeholder="Search customer"]').click();
 // Fill [placeholder="Search customer"]
 
 await page.locator('[placeholder="Search customer"]').fill('90999564');
 
 // Click text=+65 9099 9564
 await page.locator('text=+65 9099 9564').click();

  // Click div:nth-child(3) > div > div > .flex > .ant-space > div:nth-child(2) > .ant-btn
  // Click #root >> text=+65 9090 9099
  //await expect (page.locator('div:nth-child(3) > div > div > .flex > .flex-fill')).toHaveText();
};
