import { type Locator, type Page, expect } from '@playwright/test'

export class LoginPage  {
    // Define selectors
    readonly page: Page
    readonly usernameInput: Locator
    readonly ssoLoginButton: Locator
    readonly passwordInput!: Locator
    readonly submitButton: Locator
    readonly errorMessage: Locator
    readonly welcomeMessage: Locator
  
    // Init selectors using constructor
    constructor(page: Page) {
      this.page = page
      this.usernameInput = page.locator('#initEmail')
      this.submitButton = page.locator('button >> text=Next')
      this.errorMessage = page.locator('.alert-error')
      this.ssoLoginButton = page.locator("text=SSO login")
      this.welcomeMessage = page.getByRole('heading', { name: 'Welcome, you have successfully logged in.' })
    }
  
    // Define login page methods
    async login(username: string, url: string) {  

        await this.page.goto(url);
        await this.ssoLoginButton.click()
        await this.usernameInput.fill(username)
        await this.submitButton.click()        
    }  

    async assertErrorMessage() {
      await expect(this.errorMessage).toContainText(
        'Login and/or password are wrong'
      )
    }

  }