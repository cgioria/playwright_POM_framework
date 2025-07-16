import { test as base, expect } from "@playwright/test";

export const test = base.extend<{ userLogin: () => Promise<void> }>({
  userLogin: async ({ page }, use) => {
    const login = async () => {
      await page.goto("/web/index.php/auth/login?lang=en")
      await page.getByRole('textbox', { name: 'Username' }).fill(process.env.ADMIN_USER!)
      await page.getByRole('textbox', { name: 'Password' }).fill(process.env.ADMIN_PASSWORD!)
      await page.getByRole('button', { name: 'Login', exact: false  }).click()
    };

    await use(login);
  },
});
