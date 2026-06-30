import test from "@playwright/test";

test('sampletest',async({browser})=>{
    const context=await browser.newContext()
    const page=await context.newPage()
    await page.goto('https://www.amazon.in')
    await page.pause()
})

test('sampletest1',async({page})=>{

await page.goto('http://www.google.com')
})

test('sampletest2',async({page})=>{
   await page.goto('https://www.naukri.com') 
})
