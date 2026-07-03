import test, { expect } from "@playwright/test";
import { text } from "node:stream/consumers";
//const{test,expect}=require('@playwright/test')

test('task',async({page})=>{
    await page.goto('https://www.saucedemo.com/')
    const username=page.locator('//input[@data-test="username"]')
    await username.fill('standard_user')
   const password=  page.locator('//input[@data-test="password"]')
    await password.fill('secret_sauce')
    await page.locator('//input[@id="login-button"]').click()
  
    const title=await page.locator('.inventory_item_name')
    await title.first().waitFor()
    const plist=await title.allTextContents()
    console.log(plist)
    const itemd=await page.locator('.inventory_item_description')
    const pcount=await itemd.count()
    console.log(pcount)
    const productname="Sauce Labs Bike Light"
    for(let i=0;i<pcount;i++){
        if(await itemd.nth(i).locator('.inventory_item_name').textContent()==productname){

            console.log(await itemd.nth(i).locator('.inventory_item_name').textContent())
            await itemd.nth(i).locator("text=Add to cart").click()
            break;
        }
    }
    const cart=page.locator('.shopping_cart_link')
    await cart.click()
    await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Bike Light')
    await page.locator('#checkout').click()
      const fname=page.locator('//input[@data-test="firstName"]')
    await fname.fill('Aadith')
const lname=page.locator('//input[@data-test="lastName"]')
    await lname.fill('Vijay')
    const postal=page.locator('//input[@data-test="postalCode"]')
    await postal.fill('560048')
    await page.locator('#continue').click()
    await page.locator('#finish').click()
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html')
   const header= await page.locator('.complete-header').textContent()
   console.log(header)
  
      
})