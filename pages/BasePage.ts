import { type Locator, type Page,  expect,  ElementHandle } from "@playwright/test";

export class BasePage {
  readonly page: Page;

  // Common navigation and header components
  readonly dashboardButton: Locator; 
  readonly admindButton: Locator; 


  constructor(page: Page) {
    this.page = page;
    this.dashboardButton = page.getByLabel("Dashboard").getByText("Dashboard");
    this.admindButton = page.getByRole('link', { name: 'Admin' })



  }

async navigateTo(path: string) {
    await this.page.goto(path);
  }






}