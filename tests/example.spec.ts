import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker/locale/ar";

test("verify error message for incorrect credentials", async ({ page }) => {
  await page.goto(process.env.APP_URL);
  await page.getByTestId("username-input").fill("testtest");
  await page.getByTestId("password-input").fill("testtest");
  await page.getByTestId("signIn-button").click();
  await expect(
    page.getByTestId("authorizationError-popup-close-button"),
  ).toBeVisible();
});

test("sign in should not be enabled if password is less than 8 characters", async ({
  page,
}) => {
  await page.goto(process.env.APP_URL);
  await page.getByTestId("username-input").fill("testtest");
  await page.getByTestId("password-input").fill("test");
  await expect(page.getByTestId("signIn-button")).toBeDisabled();
  await expect(
    page.getByText("The field must contain at least of characters: 8"),
  ).toBeVisible();
});

const randomUsername = faker.internet.username();
const randomPassword = faker.internet.password();
