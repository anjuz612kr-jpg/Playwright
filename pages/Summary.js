class Summary{
    constructor(page){
        this.page=page
        this.item=page.locator(".inventory_item_name")
        this.total=page.locator(".summary_subtotal_label")
        this.finishbtn=page.locator("#finish")
    }
    async getSummary(){
        await this.item.waitFor();
        console.log(await this.total.textContent())
    }
    async clickFinish(){
        await this.finishbtn.click()
    }
}
module.exports=Summary