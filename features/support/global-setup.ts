import { chromium, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  // Configuración global antes de todos los tests
}

export default globalSetup;