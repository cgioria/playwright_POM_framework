import { expect  } from "@playwright/test";
import { test } from "@fixtures/user-fixture";
import { DashboardPage , AdminPage} from "@pages";
import { makeid } from '../../utils/generate-string'
import { validateMessage,validateElement } from '../../utils/assertions';

test.describe("Admin features", () => {
  test.beforeEach(async ({ userLogin }, testInfo) => {
    if (testInfo.project.name !== "User") {
    }
    await userLogin();
  });

test("Dashboard tests", async ({ page }) => {
    const dashboard = new DashboardPage(page);
    const adminpage = new AdminPage(page);
    await dashboard.admindButton.click();
    await validateElement(adminpage.adminTitle)

    await test.step('Admin- User Management | Add new user', async () => {        
      let randomid= makeid(8)
      await adminpage.adduserButton.click();
      await adminpage.selectDropdownOption('User Role', 'Admin');
      await adminpage.selectDropdownOption('Status', 'Enabled');
      await adminpage.employeenameTextbox.fill('e');
      await page.waitForTimeout(1000);
      await page.locator('.oxd-autocomplete-option', { hasText: 'e' }).first().click();
      await adminpage.usernameTextbox.fill(randomid);    
      await adminpage.passwordTextbox.fill(randomid);
      await adminpage.confirmpasswordTextbox.fill(randomid);
      await adminpage.saveButton.click();

    });


  });




});
