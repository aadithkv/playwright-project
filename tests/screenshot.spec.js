import test from "@playwright/test";

test('screenshot',async({page})=>{
    await page.goto("https://selenium.qabible.in/javascript-alert.php")
    await page.screenshot({path:'screenshot.png'})
    const button=page.locator(".btn.btn-warning")
    await button.screenshot({path:'screenshot1.png'})
})
