import { type Locator, type Page, expect } from '@playwright/test'
import { BasePage } from '../pages/BasePage'

export class AdminPage extends BasePage{
  readonly adminTitle: Locator
  readonly usermanagerButton: Locator
  readonly jobButton: Locator
  readonly organizationButton: Locator
  readonly qualificationsButton: Locator
  readonly nationalitiesButton: Locator
  readonly corporateButton: Locator
  readonly configurationButton: Locator
  readonly adduserButton: Locator

  readonly userroleDropdown: Locator
  readonly employeenameTextbox: Locator
  readonly statusDropdown: Locator
  readonly usernameTextbox: Locator
  readonly passwordTextbox: Locator
  readonly confirmpasswordTextbox: Locator
  readonly saveButton: Locator
  readonly cancelButton: Locator


  constructor(page: Page) {
    super(page); // Call to the base class constructor
    this.adminTitle = page.getByRole('heading', { name: 'Admin' })
    this.usermanagerButton = page.getByText('User Management')
    this.jobButton = page.getByText('Job', { exact: true })
    this.organizationButton = page.getByText('Organization')
    this.qualificationsButton = page.getByText('Qualifications')
    this.nationalitiesButton = page.getByRole('link', { name: 'Nationalities' })
    this.corporateButton = page.getByRole('link', { name: 'Corporate Branding' })
    this.configurationButton = page.getByText('Configuration')
    this.adduserButton = page.getByRole('button', { name: 'Add' , exact: false })
    this.userroleDropdown = page.locator('//label[contains(text(), "User Role")]/ancestor::div[@class="oxd-input-group__label-wrapper"]/following-sibling::div//div[@class="oxd-select-text-input"]')
    this.statusDropdown = page.locator('//label[contains(text(), "Status")]/ancestor::div[@class="oxd-input-group__label-wrapper"]/following-sibling::div//div[@class="oxd-select-text-input"]')
    this.employeenameTextbox = page.getByRole('textbox', { name: 'Type for hints...' })
    this.usernameTextbox = page.getByRole('textbox').nth(2)
    this.passwordTextbox = page.getByRole('textbox').nth(3)
    this.confirmpasswordTextbox = page.getByRole('textbox').nth(4)
    this.saveButton = page.getByRole('button', { name: 'Save' })
    this.cancelButton = page.getByRole('button', { name: 'Cancel' })


  }

  async selectDropdownOption(dropdownLabel: string, optionText: string): Promise<void> {
        const dropdownLocator = this.page.locator(
            `//label[contains(text(), "${dropdownLabel}")]/ancestor::div[@class="oxd-input-group__label-wrapper"]/following-sibling::div//div[@class="oxd-select-text-input"]`
        );        
        const optionLocator = this.page.locator(
            `div.oxd-select-dropdown:visible >> div.oxd-select-option:has-text("${optionText}")`
        );
        try {
            await dropdownLocator.click();
            await this.page.waitForSelector('div.oxd-select-dropdown:visible');
            await optionLocator.click();
            await this.page.waitForSelector(`div.oxd-select-text-input:has-text("${optionText}")`);
        } catch (error) {
            console.error(`Error selecting option "${optionText}" from dropdown "${dropdownLabel}":`, error);
            throw error; // Re-throw the error to fail the test
        }
    }



    

}
