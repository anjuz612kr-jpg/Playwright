class Cart{
    constructor(page){
        this.page=page
        this.checkout=page.locator("#checkout")
    }
    async clickCheckOut(){
        await this.checkout.click()
    }
}
module.exports=Cart