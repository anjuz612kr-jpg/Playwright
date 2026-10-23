Feature:ecommerce validation
@regression
Scenario:Placing order for a product on the ecommerce website
Given Enter the username "standard_user" and password "secret_sauce" and click on the login button
When The dashboard is displayed and the product "Sauce Labs Backpack" is added to cart and click on the cart icon
Then My cart is displayed and click on the checkout button
When The shipping details are entered and the continue button
Then The summary details of the product are seen
When The finish button is clicked
Then A confirmation message-Thank you for your order! is displayed

@validation
Scenario: Login to ecommerce website with wrong credentials
Given The wrong username "<username>" and password "<password>" and click on the login button
Then Verify that error message is displayed

Examples:
    |username    | password    |
    |standarduser| secret_sauce|




