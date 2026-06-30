import { Locator, Page } from "@playwright/test"
export class productpage {
    title:Locator
    itemd:Locator
    cart:Locator
    page:Page
    constructor(page:Page) {
        this.page = page
        this.title = page.locator('.inventory_item_name')
        this.itemd =  page.locator('.inventory_item_description')
        this.cart = page.locator('.shopping_cart_link')
    }
    async addCart(pname:String) {
        await this.title.first().waitFor()
        const plist = await this.title.allTextContents()
        console.log(plist)

        const pcount = await this.itemd.count()
        console.log(pcount)
        const productname = pname
        for (let i = 0; i < pcount; i++) {
            if (await this.itemd.nth(i).locator('.inventory_item_name').textContent() == productname) {

                console.log(await this.itemd.nth(i).locator('.inventory_item_name').textContent())
                await this.itemd.nth(i).locator("text=Add to cart").click()
                break;
            }
        }

    }
    async navigate() {
        await this.cart.click()
    }
}

