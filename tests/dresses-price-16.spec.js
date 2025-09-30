// dresses-price-16.spec.js
const { test, expect } = require('@playwright/test');

test('Check price of Printed Chiffon Dress is $16', async ({ page }) => {
  // 1. Navigate to the website
  await page.goto('http://www.automationpractice.pl/index.php');

  // 2. Click on the "DRESSES" option
  await page.click('//*[@id="block_top_menu"]/ul/li[2]/a');

  // 3. Confirm that the price of "Printed Chiffon Dress" is $16
  const dress = page.locator('.product-container:has-text("Printed Chiffon Dress")');
  const price = dress.locator('.right-block .price');
  await expect(price).toContainText('$16');
});
