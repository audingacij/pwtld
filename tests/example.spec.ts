import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";

test.beforeEach(async ({ page }) => {
  await page.goto(process.env.APP_URL);
});

test("verify error message for incorrect credentials", async ({ page }) => {
  const randomUsername = faker.internet.username();
  const randomPassword = faker.internet.password();
  await page.getByTestId("username-input").fill(randomUsername);
  await page.getByTestId("password-input").fill(randomPassword);
  await page.getByTestId("signIn-button").click();
  await expect(
    page.getByTestId("authorizationError-popup-close-button"),
  ).toBeVisible();
});

test("sign in should not be enabled if password is less than 8 characters", async ({
  page,
}) => {
  const randomUsername = faker.internet.username();
  const randomPassword = faker.internet.password({ length: 7 });
  await page.getByTestId("username-input").fill(randomUsername);
  await page.getByTestId("password-input").fill(randomPassword);
  await expect(page.getByTestId("signIn-button")).toBeDisabled();
  await expect(
    page.getByText("The field must contain at least of characters: 8"),
  ).toBeVisible();
});
