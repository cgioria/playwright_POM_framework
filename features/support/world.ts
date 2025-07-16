import { Page, BrowserContext, Browser } from '@playwright/test';
import { setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber';

export interface ICustomWorld extends World {
  page: Page;
  context: BrowserContext;
  browser: Browser; // <-- Añade esta línea
}

export class CustomWorld extends World implements ICustomWorld {
  constructor(options: IWorldOptions) {
    super(options);
  }
  page!: Page;
  context!: BrowserContext;
  browser!: Browser; // <-- Añade esta propiedad
}

setWorldConstructor(CustomWorld);