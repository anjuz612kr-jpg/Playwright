const { test,expect } = require("@playwright/test");
test('@web ClientApp using Special locators',async({page})=>
    {
    await page.goto("https://www.saucedemo.com/")
    await page.getByPlaceholder("Username").fill("standard_user")
    await page.getByPlaceholder("Password").fill("secret_sauce")
    await page.getByRole("button",{name:'Login'}).click()
    await page.getByRole("button",{name:'Add to cart'}).nth(0).click()
    //await page.getByTestId("shopping-cart-link").click()
    await page.locator("#shopping_cart_container").click()
    await page.getByRole("button",{name:'Checkout'}).click()
    await page.getByPlaceholder("First Name").fill("Anjumol")
    await page.getByPlaceholder("Last Name").fill("Prasad")
    await page.getByPlaceholder("Zip/Postal Code").fill("683515")
    await page.getByRole("button",{name:'Continue'}).click()
    await page.getByRole("button",{name:'Finish'}).click()
    await expect(page.getByText("Thank you for your order!")).toContainText("Thank you")
    //await page.pause()
})