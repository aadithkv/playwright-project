import test from "@playwright/test";

test('Locators',async({page})=>{
   await page.goto('https://www.saucedemo.com/')
   /* await page.locator("#user-name").fill('standard_user')
    await page.locator('#password').fill('secret_sauce')
    await page.locator('#login-button').click()
   
    await page.locator('input[data-test="username"]').fill('standard_user')
    await page.locator('input[data-test="password"]').fill('secret_sauce')
    await page.locator('.submit-button').click()
     await page.pause()
     */
    await page.locator('//input[@data-test="username"]').fill('standard_user')
    await page.locator('//input[@data-test="password"]').fill('secret_sauce')
    await page.locator('//input[@id="login-button"]').click()
} )