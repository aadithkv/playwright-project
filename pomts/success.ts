import { Locator, Page } from "@playwright/test"

import { expect} from "@playwright/test"
export class success{
    page:Page
    header:Locator
    
    constructor(page:Page){
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

 