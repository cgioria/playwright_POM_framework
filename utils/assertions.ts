import { expect, Locator, Page } from '@playwright/test';

/**
 * Verifica que un elemento esté visible.
 */
export async function validateElement(element: Locator) {
  await expect(element).toBeVisible();
}

/**
 * Verifica que un elemento tenga un texto específico.
 */
export async function expectText(element: Locator, expectedText: string) {
  await expect(element).toHaveText(expectedText);
}

/**
 * Verifica que el título de la página sea el esperado.
 */
export async function expectPageTitle(page: Page, expectedTitle: string) {
  await expect(page).toHaveTitle(expectedTitle);
}

/**
 * Verifica que la URL actual coincida con la esperada.
 */
export async function expectUrl(page: Page, expectedUrl: string) {
  await expect(page).toHaveURL(expectedUrl);
}

/**
 * Verifica que un input tenga un valor específico.
 */
export async function expectInputValue(input: Locator, expectedValue: string) {
  await expect(input).toHaveValue(expectedValue);
}

/**
 * Verifica que un checkbox esté marcado.
 */
export async function expectChecked(checkbox: Locator) {
  await expect(checkbox).toBeChecked();
}

/**
 * Verifica que un botón esté deshabilitado.
 */
export async function expectDisabled(button: Locator) {
  await expect(button).toBeDisabled();
}


export async function validateMessage(page: Page, text: string, exact: boolean = true) {
let messageLocator: Locator;
if (exact) {
 messageLocator = page.getByText(text, { exact: true });
 } else {
 messageLocator = page.locator(`text=${text}`);
}
 await expect(messageLocator).toBeVisible();
}


export async function assertBadgeNumberEquals(locator: Locator, expected: number) {
 const text = await locator.textContent();
 const number = Number(text);
 expect(number).toBe(expected);
}





