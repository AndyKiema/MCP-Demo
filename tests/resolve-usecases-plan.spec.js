// resolve-usecases-plan.spec.js
const { test, expect } = require('@playwright/test');

test('Verify Resolve.vote monthly basic plan is $10/month', async ({ page }) => {
  // 1. Navigate to https://resolve.vote/
  await page.goto('https://resolve.vote/');

  // 2. Click on Pricing
  await page.getByRole('link', { name: /Pricing/i }).click();

  // 3. Verify that the monthly basic plan is $10/month
  // Adjust selector as needed if the site structure changes
  const plan = page.locator('text=10$/mo');
  await expect(plan).toBeVisible();
});
