import { Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

export async function login(page: Page) {
  const loginPage = new LoginPage(page);
  const url = "/login";
  const user = "adt.automation@wc.com";
  await loginPage.login(user, url);
  await page.waitForTimeout(3000);
}
