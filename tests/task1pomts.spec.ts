import test, { expect } from "@playwright/test";
// import { json, text } from "node:stream/consumers";
// import { loginpage } from "../pom/loginpage";
// import { productpage } from "../pom/productpage";
// import { cartpage } from "../pom/cartpage";
// import { checkout } from "../pom/checkout";
// import { success } from "../pom/success";
import { pagemanager } from "../pomts/pagemanager";
//import testdata from "../utils/userdata.json"
import testdata from "../utils/userdata.json"
const testobject=JSON.parse(JSON.stringify(testdata))

for(const dataset of testdata){
test(`task ${dataset.productname}`, async ({ page }) => {
const manager=new pagemanager(page)
const login= manager.getLogin()

const product= manager.viewProduct()
const cart= manager.getCart()
const check= manager.getCheckout()
const val= manager.getSuccess()
await login.navigatePage()
    await login.validateUser(dataset.username,dataset.password)

    await product.addCart(dataset.productname)
    await product.navigate()

    await cart.cartValidation(dataset.productname)
    await cart.clickCheckout()

    await check.filldetails(dataset.fname,dataset.lname,dataset.postal)
    await check.finish1()


    await val.urlVerification()
    await val.lastPageVerification()


    await page.pause()
})
}