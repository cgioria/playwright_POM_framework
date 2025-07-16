import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { DashboardPage, AdminPage } from '@pages';
import { makeid } from '../../utils/generate-string';
import { validateMessage } from '../../utils/assertions';
import dotenv from 'dotenv';

dotenv.config();

let adminpage: AdminPage;
let randomUsername: string;

Given('I am logged in as an admin user', async function () {
  await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  console.log(process.env.ADMIN_USER);
  await this.page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await this.page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await this.page.getByRole('button', { name: 'Login' }).click();
});

When('I navigate to the admin section', async function () {
  const dashboard = new DashboardPage(this.page);
  await dashboard.admindButton.click();
  adminpage = new AdminPage(this.page);
  await expect(adminpage.adminTitle).toBeVisible();
});

When('I click on the {string} button', async function (buttonText: string) {
      await adminpage.adduserButton.click();
});

When('I select {string} from {string} dropdown', async function (option: string, dropdownName: string) {
  await adminpage.selectDropdownOption(dropdownName, option);
});

When('I enter employee name {string}', async function (name: string) {
  await adminpage.employeenameTextbox.fill(name);
  await this.page.waitForTimeout(1000);
  await this.page.locator('.oxd-autocomplete-option', { hasText: name }).first().click();
});

When('I enter a random username and password', async function () {
  randomUsername = makeid(8);
  await adminpage.usernameTextbox.fill(randomUsername);
  await adminpage.passwordTextbox.fill(randomUsername);
});

When('I confirm the password', async function () {
  await adminpage.confirmpasswordTextbox.fill(randomUsername);
});

Then('I should see a success message', async function () {
  await validateMessage(this.page, 'Successfully Saved');
});