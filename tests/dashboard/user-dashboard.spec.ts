import { expect  } from "@playwright/test";
import { test } from "@fixtures/user-fixture";
import { DashboardPage , AdminPage} from "@pages";
import { makeid } from '../../utils/generate-string'
import { validateMessage,assertBadgeNumberEquals ,validateElement } from '../../utils/assertions';


test.describe("Dashboard features", () => {
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
    await validateElement(adminpage.jobButton)
    await validateElement(adminpage.organizationButton)
    await validateElement(adminpage.qualificationsButton)
    await validateElement(adminpage.nationalitiesButton)
    await validateElement(adminpage.corporateButton)
    await validateElement(adminpage.configurationButton)
 

  });




});
