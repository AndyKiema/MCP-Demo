// search-tshirts.spec.js
const { test, expect } = require('@playwright/test');

test('Search for T-shirts and verify result', async ({ page }) => {
  // 1. Navigate to the website
  await page.goto('http://www.automationpractice.pl/index.php');

  // 2. Search for 'T-shirts'
  await page.fill('input[name="search_query"]', 'T-shirts');
  await page.click('button[name="submit_search"]');

  // 3. Verify that 'Faded Short Sleeve T-shirts' is in the list
  const product = page.locator('.product_list .product-name', { hasText: 'Faded Short Sleeve T-shirts' });
  await expect(product).toBeVisible();
});
