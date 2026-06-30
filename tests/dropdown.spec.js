import test from "@playwright/test";

test('drop', async({page})=>{
   await page.goto('https://selenium.qabible.in/select-input.php')
  const drop1= await page.locator('#single-input-field')
  await drop1.selectOption("Red")
   await page.pause()
})