import { chromium } from '@playwright/test';
import { CustomWorld } from './world';
import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';

setDefaultTimeout(30 * 1000); // 30 segundos

Before(async function (this: CustomWorld) {
  this.browser = await chromium.launch({ 
    headless: false,
    timeout: 30000
  });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

After(async function (this: CustomWorld) {
  await this.page?.close();
  await this.context?.close();
  await this.browser?.close();
});