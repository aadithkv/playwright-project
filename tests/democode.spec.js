import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
  await page.getByRole('button', { name: '✕' }).click();
  await page.getByRole('textbox', { name: 'Search for Products, Brands' }).click();
  await page.getByRole('link', { name: 'shoes', exact: true }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link').filter({ hasText: /^$/ }).nth(1).click();
  const page1 = await page1Promise;
  await page1.getByRole('link', { name: 'Login' }).nth(1).click();
  await page1.goto('https://www.flipkart.com/account/login?ret=/');
});