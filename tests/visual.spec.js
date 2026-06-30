import test, { expect } from "@playwright/test";

test('visual',async({page})=>{
await page.goto("https://selenium.qabible.in/javascript-alert.php")
expect(await page.screenshot()).toMatchSnapshot('screenshot2.png')
})