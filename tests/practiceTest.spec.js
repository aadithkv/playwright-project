import test, { expect } from "@playwright/test";

test('locators',async({page})=>{
    await page.goto("https://selenium.qabible.in/index.php")
    //await page.locator('//a[@href="simple-form-demo.php"]').click()
    await page.locator(".nav-link").nth(1).click()
    const checkbox=await page.locator('//a[@href="check-box-demo.php"]')
    await checkbox.click()
    const chk1=await page.locator('//input[@id="gridCheck"]')
    
    await chk1.check()
    await expect(chk1).toBeChecked()
    console.log(await chk1.isChecked())
    await page.pause()
    await page.locator('//input[@id="check-box-two"]').click()
    await page.pause()
    
    await page.locator('//input[@value="Select All"]').click()
    await page.pause()
    const radio=await page.locator('//a[@href="radio-button-demo.php"]')
    await radio.click()
    const radio1=page.locator('label[for="inlineRadio1"]')
    await radio1.click()
    await page.pause()
})