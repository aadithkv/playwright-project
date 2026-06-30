import test from "@playwright/test";
test.describe.parallel('parallel test executio',()=>{
test('frameHandling',async({page})=>{
await page.goto('https://demoqa.com/frames')
const framepage=page.frameLocator('#frame1')
console.log(await framepage.locator('#sampleHeading').textContent())
await page.pause()
})

test.only('@web mousehover',async({page})=>{
await page.goto('https://selenium.qabible.in/index.php')
await page.locator('//a[@id="others"]').hover()
await page.waitForTimeout(5000)
})

test.only('@web',async({page})=>{
await page.goto('https://selenium.qabible.in/index.php')
await page.locator('//a[@id="others"]').hover()
await page.waitForTimeout(4000)
})
})