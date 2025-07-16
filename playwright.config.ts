import { defineConfig, devices } from "@playwright/test";
import { config as loadEnv } from "dotenv";
import path from "path";

const ENV = process.env.ENV || "qa";
loadEnv({ path: path.resolve(__dirname, `./environments/.${ENV}.env`) });

export default defineConfig({
  // Configuración base compartida
  testDir: "./tests",
  fullyParallel: false,
  reporter: [['list'], ['junit', { outputFile: 'test-results/results.xml' }]],
  
  // Configuración para proyectos específicos
  projects: [
    // Tus proyectos existentes (Admin, Internal, User) se mantienen igual
    {
      name: "Admin",
      use: {
        ...devices["Desktop Chrome"],
        baseURL: process.env.BASE_URL,
        clientCertificates: [
          {
            origin: "https://login-stg.internal.com",
            pfxPath: process.env.ADMIN_PFX_PATH,
            passphrase: process.env.ADMIN_PASSPHRASE,
          },
        ],
      },
    },
    {
      name: "Internal",
      use: {
        ...devices["Desktop Chrome"],
        baseURL: process.env.BASE_URL,
        clientCertificates: [
          {
            origin: "https://login-stg.internal.com",
            pfxPath: process.env.INTERNAL_PFX_PATH,
            passphrase: process.env.INTERNAL_PASSPHRASE,
          },
        ],
      },
    },
    {
      name: "User",
      use: {
        ...devices["Desktop Chrome"],
        baseURL: process.env.BASE_URL,
        clientCertificates: [
          {
            origin: "https://the-internet.herokuapp.com",
            pfxPath: process.env.INTERNAL_PFX_PATH,
            passphrase: process.env.INTERNAL_PASSPHRASE,
          },
        ],
      },
    },
    
    // Configuración específica para Cucumber
    {
      name: 'cucumber',
      testMatch: 'features/**/*.feature',
      testDir: './', // Necesario para encontrar features en la raíz
      use: {
        ...devices["Desktop Chrome"], // Hereda la configuración del navegador
        baseURL: process.env.BASE_URL, // Usa la misma URL base
        
        // Configuración específica para certificados si es necesaria
        clientCertificates: [
          {
            origin: "https://login-stg.internal.com",
            pfxPath: process.env.ADMIN_PFX_PATH,
            passphrase: process.env.ADMIN_PASSPHRASE,
          },
        ],
        
        // Configuración adicional para Cucumber
        extraHTTPHeaders: {
          'Accept': 'application/json',
        },
      },
    },
  ],
  
  // Configuración global opcional para Cucumber
  globalSetup: require.resolve('./features/support/global-setup.ts'),
  globalTeardown: require.resolve('./features/support/global-teardown.ts'),
});