const {test,expect} = require("@playwright/test");
test.describe.configure({mode:"parallel"})
//old method
test('first playwright test',async function(){

})
//new method with arrow functions
test('browser context playwright test',async({browser})=>{
 const context=await browser.newContext();
 const page=await context.newPage()
 await page.goto("https://google.com")
 console.log(await page.title())
 await page.goto("https://www.saucedemo.com/")
 await page.locator("#user-name").fill("standarduser")
 await page.locator("#password").fill("secret_sauce")
 await page.locator("#login-button").click()
 await expect(page.locator(".error-message-container.error")).toHaveText("Epic sadface: Username and password do not match any user in this service")
 await expect(page.locator(".error-message-container.error")).toContainText("Epic sadface:")
 const Username=page.locator("#user-name")
 const login=page.locator("#login-button")
 await Username.fill(" ")
 await Username.fill("standard_user")
 await login.click()
 console.log(await page.locator(".inventory_item_name").first().textContent())
 console.log(await page.locator(".inventory_item_name").nth(1).textContent())
 const allTitles=await page.locator(".inventory_item_name").allTextContents()
 console.log(allTitles)
 //await page.pause()
})

//testcase using page context
test('page playwright test',async({page})=>{
    await page.goto("https://google.com")
    console.log(await page.title())
    await expect(page).toHaveTitle("Google")
})

// static controls


test('UI controls', async({page})=>{
    await page.goto("https://selenium.qabible.in/index.php")
    await page.locator(".nav-item").nth(1).click()
    await page.locator(".list-group-item").nth(1).click()
    await page.locator("#gridCheck").check()
    await expect(page.locator("#gridCheck")).toBeChecked()
    //another way of writing assertion
    expect(await page.locator("#gridCheck").isChecked()).toBeTruthy()
    await page.locator(".list-group-item").nth(2).click()
    await page.locator("#inlineRadio1").check()
    await expect(page.locator("#inlineRadio1")).toBeChecked()
    await page.locator("#inlineRadio24").check()
    expect(page.locator("#inlineRadio24").isChecked()).toBeTruthy()
    await page.locator("//a[normalize-space()='Select Input']").click()
    await page.locator("#single-input-field").selectOption("Red")
    expect(await page.locator("#single-input-field")).toHaveValue("Red")
    await page.locator("//a[normalize-space()='Form Submit']").click()
    await page.locator("#validationCustom01").fill("Anjumol")
    await page.locator("#validationCustom02").fill("Prasad")
    await page.locator("#validationCustomUsername").fill("Anju")
    await page.locator("#validationCustom03").fill("Kochi")
    await page.locator("#validationCustom04").fill("Kerala")
    await page.locator("#validationCustom05").fill("683515")
    await page.locator("#invalidCheck").check()
    await page.locator(".btn.btn-primary").click()
    await expect(page.locator("#message-one")).toHaveText("Form has been submitted successfully!")
    await page.locator(".list-group-item").nth(0).click()
    await page.locator("#single-input-field").fill("Hello World")
    await page.locator("#button-one").click()
    await expect(page.locator("#message-one")).toHaveText("Your Message : Hello World")
    //await page.pause()
})

test('Child Window and New Tab',async({browser})=>{
    const context=await browser.newContext()
    const page=await context.newPage()
    await page.goto("https://www.google.com")
    const [childpage]=await Promise.all([
        context.waitForEvent('page'),
        page.evaluate(()=>window.open("https://www.saucedemo.com"))
    ])
    const newTab=await context.newPage()
    await newTab.goto("https://www.github.com")
    console.log("Child window and new tab opened successfully")
    //await page.pause()

})


//test('codegen generate code',async({page})=>{
   // import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').press('CapsLock');
  await page.locator('[data-test="firstName"]').fill('A');
  await page.locator('[data-test="firstName"]').press('CapsLock');
  await page.locator('[data-test="firstName"]').fill('Anjumol');
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').press('CapsLock');
  await page.locator('[data-test="lastName"]').fill('P');
  await page.locator('[data-test="lastName"]').press('CapsLock');
  await page.locator('[data-test="lastName"]').fill('Prasad');
  //await page.locator('[data-test="postalCode"]').click();
  //await page.locator('[data-test="postalCode"]').press('ArrowRight');
  //await page.locator('[data-test="postalCode"]').press('ArrowUp');
  //await page.locator('[data-test="postalCode"]').press('PageDown');
  //await page.locator('[data-test="postalCode"]').press('Clear');
  //await page.locator('[data-test="postalCode"]').press('End');
  //await page.locator('[data-test="postalCode"]').press('Clear');
  //await page.locator('[data-test="postalCode"]').press('ArrowRight');
  await page.locator('[data-test="postalCode"]').fill('683515');
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();
});
//})

test('Special locators in playwright',async({page})=>
{
 await page.goto("https://selenium.qabible.in/#index.php")
// await page.locator(".nav-link").nth(1).click()
await page.getByRole("link",{name:'Input Form'}).click()
await page.getByRole("link",{name:'Checkbox Demo'}).click()
await page.getByRole("link",{name:'Radio Buttons Demo'}).click()
 //await page.locator("//a[normalize-space()='Select Input']").click()
 await page.getByRole("link",{name:'Select Input'}).click()
 await page.getByLabel("Select Color").selectOption("Red")
 //await page.locator("//a[normalize-space()='Form Submit']").click()
 await page.getByRole("link",{name:'Form Submit',exact: true}).click()
 await page.getByPlaceholder("First name").fill("Anjumol")
 await page.getByPlaceholder("Last name").fill("Prasad")
 await page.getByPlaceholder("Username").fill("Anju")
 await page.getByPlaceholder("City").fill("Kochi")
 await page.getByPlaceholder("State").fill("Kerala")
 await page.getByPlaceholder("Zip").fill("683515")
 await page.getByLabel("Agree to terms and conditions").check()
 await page.getByRole("button",{name:'Submit form'}).click()
 await expect(page.getByText("Form has been submitted successfully!")).toContainText("Form has been submitted")
 await page.getByRole("link",{name:'Simple Form Demo'}).click()
 await page.getByPlaceholder("Message").fill("Hello World")
 await page.getByRole("button",{name:'Show Message'}).click()
 await expect(page.getByText("Your Message : Hello World")).toHaveText("Your Message : Hello World")

 //await page.pause()

})

//7/9/2026-->calendar validation
const date=12
const month=11
const year=1997
test('calendar validation',async({page})=>{
    await page.goto("https://selenium.qabible.in/#index.php")
    await page.getByRole("link",{name:'Date Pickers'}).click()
    await page.getByRole("link",{name:'Bootstrap Date Picker'}).click()
    await page.locator("#single-input-field").click()
    await page.locator(".datepicker-days th.datepicker-switch").click()
    await page.locator(".datepicker-months th.datepicker-switch").click()
    const targetYear=1997
    while(true)
      {
        const currentDecade=await page.locator(".datepicker-years th.datepicker-switch").textContent()
        const startDecade=parseInt(currentDecade.split("-")[0])
        console.log(startDecade)
        if(targetYear>=startDecade && targetYear<=startDecade+9)
         {
            break
         }
         await page.locator(".datepicker-years th.prev").click()
      }
    await page.getByText(targetYear.toString(),{exact:true}).click()
    await page.locator(".month").nth(month-1).click()
    await page.getByText(date.toString(),{exact:true}).click()
    //await page.pause()
})

