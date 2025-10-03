// tymira-login-nonavigate.spec.js
const { test, expect } = require('@playwright/test');

test('Log in button does not navigate', async ({ page }) => {
  // 1. Navigate to https://tymirahealth.com/
  await page.goto('https://tymirahealth.com/');

  // 2. Click on "Log in" on the header
  const loginButton = page.getByRole('link', { name: /Log in/i });
  const urlBefore = page.url();
  await loginButton.click();
  // Wait briefly to allow any navigation to occur
  await page.waitForTimeout(1000);
  const urlAfter = page.url();

  // 3. Ensure clicking does not cause navigation
  expect(urlAfter).toBe(urlBefore);
});
