import { expect, test } from '@playwright/test';
import clockIn from './clockIn';

test.beforeEach(clockIn);

test.describe('Customer account', () => {
  const accounts = [
    {
      title: 'With name',
      name: 'Test'
    }
  ];

  for (const { title, name, tel, email } of accounts) {
    test(title, async ({ page }) => {
      // Click div:nth-child(3) > div > div > .flex > .ant-space > .ant-space-item > .ant-btn
      await page.locator('#new-customer').click();

      if (name) {
        // Click input[type="text"] >> nth=1
        await page.locator('input[type="text"]').nth(1).click();
        // Fill input[type="text"] >> nth=1
        await page.locator('input[type="text"]').nth(1).fill(name);
      }

      if (tel) {
        // Click [placeholder="\31  \(702\) 123-4567"]
        await page.locator('[placeholder="\\31  \\(702\\) 123-4567"]').click();
        // Fill [placeholder="\31  \(702\) 123-4567"]
        await page.locator('[placeholder="\\31  \\(702\\) 123-4567"]').fill('+65 9988-98776');
      }

      if (email) {
        // Click [placeholder="example\@gamil\.com"]
        await page.locator('[placeholder="example\\@gamil\\.com"]').click();
        // Fill [placeholder="example\@gamil\.com"]
        await page.locator('[placeholder="example\\@gamil\\.com"]').fill('test@gmail.com');
        // Click button:has-text("Create account")
      }

      await page.locator('button:has-text("Create account")').click();

      await expect(page.locator(`text=${name}`)).toBeVisible();
    });
  }
});