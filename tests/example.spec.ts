import { test, expect } from '@playwright/test';

test('login page opens', async ({ page }) => {
  await page.goto('/');

  const loginButton = page.getByTestId('login-button');
  await expect(loginButton).toBeVisible();
  await expect(loginButton).toHaveText('Log in');
});
