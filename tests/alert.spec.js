import test from "@playwright/test";


test('alert',async({browser})=>{
    const context=await browser.newContext()
    const page=await context.newPage()
    await page.goto("https://selenium.qabible.in/index.php")
    console.log(await page.title())
    const loc=page.locator('//a[@href="bootstrap-alert.php"]')
    await loc.click()
     await page.getByText("Window Popup").click()
     
     const fb= page.getByText("Like us On Facebook")
     const [newPage]=await Promise.all(
     [context.waitForEvent("page"),
     await fb.click()]
     )
     await newPage.waitForLoadState()
     const newTitle=await newPage.title()
console.log(newTitle)
newPage.close()
    
  

     await page.goto("https://selenium.qabible.in/javascript-alert.php")
     const button=page.locator(".btn.btn-warning")
       page.on('dialog',async dialog=>{
        await page.waitForTimeout(4000)
        await dialog.accept() //await dialog.dismiss()
    })

     await button.click()
   
     await page.pause()

})