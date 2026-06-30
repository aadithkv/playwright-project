// import { loginpage } from "./loginpage"
// import { cartpage } from "./cartpage"
// import { checkout } from "./checkout"
// import { success } from "./success"
// import { productpage } from "./productpage"
// import { Page } from "@playwright/test"

import { loginpage } from "../pomts/loginpage"
import { cartpage } from "../pomts/cartpage"
import { checkout } from "../pomts/checkout"
import { success } from "../pomts/success"
import { productpage } from "../pomts/productpage"
import { Page } from "@playwright/test"

export class pagemanager {
    page:Page
    login:loginpage
    product:productpage
    cart:cartpage
    check:checkout
    val:success
    constructor(page:Page) {
        this.page=page
        this.login = new loginpage(page)
         this.product = new productpage(page)
        this.cart = new cartpage(page)
         this.check = new checkout(page)
        this.val = new success(page)
    }
     getLogin(){
        return this.login
    }
     viewProduct(){
        return this.product
    }
     getCart(){
        return this.cart
    }
     getCheckout(){
        return this.check
    }
     getSuccess(){
        return this.val
    }
}