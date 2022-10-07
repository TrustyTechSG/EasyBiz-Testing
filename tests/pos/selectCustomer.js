export default async (page, search) => {
  await page.locator('[placeholder="Search customer"]').click();
  // Fill [placeholder="Search customer"]

  await page.locator('[placeholder="Search customer"]').fill(search);

  // Click text=+65 9099 9564
  await page.locator(`text=${search}`).click();
};
