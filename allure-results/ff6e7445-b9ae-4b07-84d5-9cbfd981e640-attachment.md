# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: task1pom.spec.js >> task Sauce Labs Backpack
- Location: tests\task1pom.spec.js:13:5

# Error details

```
Test timeout of 40000ms exceeded.
```

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('.inventory_item_name')
Expected: "Sauce Labs Bike Light"
Received: "Sauce Labs Backpack"

Call log:
  - Expect "toHaveText" with timeout 50000ms
  - waiting for locator('.inventory_item_name')
    79 × locator resolved to <div class="inventory_item_name" data-test="inventory-item-name">Sauce Labs Backpack</div>
       - unexpected value "Sauce Labs Backpack"

```

```yaml
- text: Sauce Labs Backpack
```

# Test source

```ts
  1  | const { expect } = require("@playwright/test")
  2  | 
  3  | export class cartpage{
  4  |     constructor(page){
  5  |         this.page=page
  6  |         this.val=page.locator('.inventory_item_name')
  7  |         this.checkout= page.locator('#checkout')
  8  | 
  9  |         
  10 |     }
  11 |     async cartValidation(){
> 12 |         await expect(this.val).toHaveText('Sauce Labs Bike Light')
     |                                ^ Error: expect(locator).toHaveText(expected) failed
  13 |     }
  14 |     async clickCheckout(){
  15 |         await this.checkout.click()
  16 |     }
  17 | }
  18 | 
  19 | 
```