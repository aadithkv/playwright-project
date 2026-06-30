import { Locator, Page } from "@playwright/test"

import { expect } from "@playwright/test"

export class cartpage{
    page:Page
    val:Locator
    checkout:Locator
    constructor(page:Page){
        this.page=page
        this.val=page.locator('.inventory_item_name')
        this.checkout= page.locator('#checkout')

        
    }
    async cartValidation(cproduct:string){
        await expect(this.val).toHaveText(cproduct)
    }
    async clickCheckout(){
        await this.checkout.click()
    }
}

