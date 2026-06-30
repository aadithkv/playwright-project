
export class loginpage {
    constructor(page) {
        this.page=page
        this.username = page.locator('//input[@data-test="username"]')
        this.password = page.locator('//input[@data-test="password"]')
        this.submit = page.locator('//input[@id="login-button"]')
    }
    async navigatePage() {
        await this.page.goto('https://www.saucedemo.com/')
    }
    async validateUser(uname,paswd) {
        await this.username.fill(uname)
        await this.password.fill(paswd)
        await this.submit.click()
    }
}

