const {test,expect} = require("@playwright/test");
/*const Login=require("../pages/Login")
const Dashboard=require("../pages/Dashboard");
const Cart = require("../pages/Cart");
const ShippingDetails = require("../pages/ShippingDetails");
const Summary = require("../pages/Summary");*/
const POManager = require("../pages/POManager");
const { customTest } = require("../Utils/TestBase");
const testdata=JSON.parse(JSON.stringify(require("../Utils/PlaceOrderTestData.json")))

for(const data of testdata)
{
test(`Automation of Shopping cart application using page-object model for purchasing the product ${data.productname}`,async({page})=>{
    /*const username="standard_user"
    const password="secret_sauce"
    const productname="Sauce Labs Backpack"*/
    const pomanager=new POManager(page)
    //const login=new Login(page)
    const login=pomanager.getLoginPage()
    await login.goto()
    await login.validLogin(data.username,data.password)

    //const dashboard=new Dashboard(page)
    const dashboard=pomanager.getDashboard()
    await dashboard.selectProduct(data.productname)
    await dashboard.moveToCart()

    //const cart=new Cart(page)
    const cart=pomanager.getCart()
    await cart.clickCheckOut()


    //const shipping=new ShippingDetails(page)
    const shipping=pomanager.getShippingDetails()
    await shipping.enterUserDetails("Anjumol","Prasad","683515")
    await shipping.clickContinue()

    //const summary=new Summary(page)
    const summary=pomanager.getSummary()
    await summary.getSummary()
    await summary.clickFinish()
    await expect(page.locator(".complete-header")).toHaveText("Thank you for your order!")
    //await page.pause()
})
}

customTest('customized testcase',async({page,testDataForOrder})=>{
const pomanager=new POManager(page)
    //const login=new Login(page)
    const login=pomanager.getLoginPage()
    await login.goto()
    await login.validLogin(testDataForOrder.username,testDataForOrder.password)

    //const dashboard=new Dashboard(page)
    const dashboard=pomanager.getDashboard()
    await dashboard.selectProduct(testDataForOrder.productname)
    await dashboard.moveToCart()

    //const cart=new Cart(page)
    const cart=pomanager.getCart()
    await cart.clickCheckOut()

})