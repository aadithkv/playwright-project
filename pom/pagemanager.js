import { loginpage } from "./loginpage"
import { cartpage } from "./cartpage"
import { checkout } from "./checkout"
import { success } from "./success"
import { productpage } from "./productpage"

export class pagemanager {
    constructor(page) {
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