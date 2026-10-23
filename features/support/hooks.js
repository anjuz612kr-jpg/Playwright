const { Before, After, AfterStep, Status } = require("@cucumber/cucumber");
const { chromium } = require("@playwright/test");

Before(async function(){
    console.log("I'm first")
    const browser=await chromium.launch({headless:false})
    const context=await browser.newContext()
    this.page=await context.newPage()
})

After(async function(){
    console.log("I'm last")
})

AfterStep(async function({result}){
    if(result.status===Status.FAILED)
        {
            const buffer=await this.page.screenshot()
            await this.page.screenshot({page:'screenshot1.png'})
            this.attach(buffer.toString('base64'),'base64:image/png')
            console.log("screenshot logged")
       }
})