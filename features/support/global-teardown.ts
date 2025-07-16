import { chromium, FullConfig } from '@playwright/test';

async function globalTeardown(config: FullConfig) {
  // Limpieza global después de todos los tests
}

export default globalTeardown;