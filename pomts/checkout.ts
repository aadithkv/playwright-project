import { Locator, Page } from "@playwright/test"

export class checkout{
    page:Page
    fname:Locator
    lname:Locator
    postal:Locator
    cont:Locator
    finish:Locator
    constructor(page:Page){
        this.page=page
        this.fname = page.locator('//input[@data-test="firstName"]')
         this.lname = page.locator('//input[@data-test="lastName"]')
        this.postal = page.locator('//input[@data-test="postalCode"]')
        this.cont=page.locator('#continue')
        this.finish=page.locator('#finish')
    }
    async filldetails(first:string,last:string,zip:string){
        await this.fname.fill(first)
        await this.lname.fill(last)
        await this.postal.fill(zip)
        await this.cont.click()
    }
    async finish1(){
        await this.finish.click()
    }
}

