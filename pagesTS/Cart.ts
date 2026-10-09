import { Locator, Page } from "@playwright/test"

export class Cart{
    page:Page
    checkout:Locator
    constructor(page:Page){
        this.page=page
        this.checkout=page.locator("#checkout")
    }
    async clickCheckOut(){
        await this.checkout.click()
    }
}
//module.exports=Cart