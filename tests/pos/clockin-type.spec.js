import { test, expect } from '@playwright/test';
import clockIn from './clockIn';

test.beforeEach(clockIn);

test('test', async ({ page }) => {
  await expect(page.locator(`button:has-text("${process.env.STAFF_NAME}")`)).toBeEnabled();
});