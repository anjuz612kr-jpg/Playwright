const { Given, When, Then } = require("@cucumber/cucumber");
const { expect, chromium } = require("@playwright/test");
const POManager = require("../../pages/POManager");

Given('Enter the username {string} and password {string} and click on the login button', async function (username, password) {
    this.pomanager=new POManager(this.page)
    const login=this.pomanager.getLoginPage()
    await login.goto()
    await login.validLogin(username,password)
});

When('The dashboard is displayed and the product {string} is added to cart and click on the cart icon',async function (productname) {
    const dashboard=this.pomanager.getDashboard()
    await dashboard.selectProduct(productname)
    await dashboard.moveToCart()
});

Then('My cart is displayed and click on the checkout button',async function () {
    const cart=this.pomanager.getCart()
    await cart.clickCheckOut()
});

When('The shipping details are entered and the continue button',async function () {
    const shipping=this.pomanager.getShippingDetails()
    await shipping.enterUserDetails("Anjumol","Prasad","683515")
    await shipping.clickContinue()
});

Then('The summary details of the product are seen', async function () {
  this.summary=this.pomanager.getSummary()
    await this.summary.getSummary()
});

When('The finish button is clicked', async function () {
  await this.summary.clickFinish()
});

Then('A confirmation message-Thank you for your order! is displayed', async function () {
await expect(this.page.locator(".complete-header")).toHaveText("Thank you for your order!")
});

Given('The wrong username {string} and password {string} and click on the login button', async function (username, password) {
 await this.page.goto("https://www.saucedemo.com/")
 await this.page.locator("#user-name").fill(username)
 await this.page.locator("#password").fill(password)
 await this.page.locator("#login-button").click()
});

Then('Verify that error message is displayed',async function () {
  await expect(this.page.locator(".error-message-container.error")).toContainText("Epic sadface:")
});