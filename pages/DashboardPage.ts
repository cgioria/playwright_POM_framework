import { type Locator, type Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class DashboardPage extends BasePage {
  readonly dashboardTitle: Locator;
  readonly generalRatesNewButton: Locator;
  readonly clientMissingLegend: Locator;
  readonly requestSpecAdvNewButton: Locator;



constructor(page: Page) {
    super(page);
    this.dashboardTitle = page.getByRole("heading", { name: "Dashboard" });
    this.generalRatesNewButton = page.getByRole('button', { name: 'New', exact: false }).first()
    this.clientMissingLegend = page.getByRole('heading', { name: 'Client missing' })
    this.requestSpecAdvNewButton= page.getByRole('button', { name: 'New', exact: false }).nth(1)

   

  }
}
