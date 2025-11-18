import { test, expect } from '@playwright/test';

test('verify error message for incorrect credentials', async ({ page }) => {
  await page.goto('https://fe-delivery.tallinn-learning.ee/signin');
  await page.getByTestId('username-input').fill('testtest')
    await page.getByTestId('password-input').fill('testtest')
    await page.getByTestId('signIn-button').click();
  await expect(page.getByTestId("authorizationError-popup-close-button")).toBeVisible();
});

test.only('sign in should not be enabled if password is less than 8 characters', async ({ page }) => {
    await page.goto('https://fe-delivery.tallinn-learning.ee/signin');
    await page.getByTestId('username-input').fill('testtest')
    await page.getByTestId('password-input').fill('test')
    await expect(page.getByTestId("signIn-button")).toBeDisabled();
    await expect(page.getByText('The field must contain at least of characters: 8')).toBeVisible();
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
