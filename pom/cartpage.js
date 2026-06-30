const { expect } = require("@playwright/test")

export class cartpage{
    constructor(page){
        this.page=page
        this.val=page.locator('.inventory_item_name')
        this.checkout= page.locator('#checkout')

        
    }
    async cartValidation(){
        await expect(this.val).toHaveText('Sauce Labs Bike Light')
    }
    async clickCheckout(){
        await this.checkout.click()
    }
}

