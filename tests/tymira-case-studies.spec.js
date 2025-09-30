// tymira-case-studies.spec.js
const { test, expect } = require('@playwright/test');

test('Navigate to Tymira Health case studies', async ({ page }) => {
  // 1. Navigate to https://tymirahealth.com/
  await page.goto('https://tymirahealth.com/');

  // 2. Scroll down and try to click on the 'Read Our Case Studies' button
  const caseStudiesButton = page.getByRole('button', { name: /Read Our Case Studies/i });
  await caseStudiesButton.scrollIntoViewIfNeeded();
  const urlBefore = page.url();
  await caseStudiesButton.click({ timeout: 3000 });
  // Wait briefly to allow any navigation to occur
  await page.waitForTimeout(1000);
  const urlAfter = page.url();
  // 3. The button should not navigate anywhere (URL should not change)
  expect(urlAfter).toBe(urlBefore);
});
