const { expect } = require("@playwright/test")
export class success{
    constructor(page){
        this.page=page
this.header = page.locator('.complete-header')

    }
    async lastPageVerification(){
        console.log(await this.header.textContent())
    }
    async urlVerification(){
         expect(this.page).toHaveURL('https://www.saucedemo.com/checkout-complete.html')
    }
}

 