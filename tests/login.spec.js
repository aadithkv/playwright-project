import {test,expect} from "@playwright/test";


const dataset=require('../utils/validlogin.json')
test('valid login using json',async({page})=>{
    await page.goto('https://www.saucedemo.com/')
    await page.locator('//input[@data-test="username"]').fill(dataset.username)
    await page.locator('//input[@data-test="password"]').fill(dataset.password)
    await page.locator('//input[@id="login-button"]').click()
  

})