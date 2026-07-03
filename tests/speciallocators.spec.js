import test, { expect } from "@playwright/test";

test('special',async({page})=>{
    await page.goto("https://selenium.qabible.in/index.php")
    const loc=page.locator('//a[@href="simple-form-demo.php"]')
    await loc.click()
    await page.getByPlaceholder("Message").fill("Hello")
    await page.getByText("CheckBox Demo").click()
    await page.getByLabel("Click on this check box").click()
    const radio=page.getByRole("link",{name:"Radio Buttons Demo"})
    await radio.click()
    const radio1=page.getByRole("radio",{name:"Male"}).first()
    await radio1.click()
    const radiobuttonischecked=await radio1.isChecked()
    console.log(radiobuttonischecked)
    await page.getByRole("button",{name:"Show Selected Value"}).click()
    const message= page.getByText(/'Male' is/)
    await expect(message).toBeVisible()
   

})