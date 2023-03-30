Feature: Check prices in swag shop

    Feature Description : check for backpack price and all prices

    Scenario: Verify backpack price
        Given I am on main swag shop page
        Then Backpack price is '23.99'

    Scenario Outline: Verify all prices
        Given I am on main swag shop page
        Then I see '<item>' in price '<price>' on the page

        Examples:
            | item                              | price |
            | Sauce Labs Backpack               | 23.99 |
            | Sauce Labs Bike Light             | 11.99 |
            | Sauce Labs Bolt T-Shirt           | 19.99 |
            | Sauce Labs Fleece Jacket          | 45.99 |
            | Sauce Labs Onesie                 | 9.99  |
            | Test.allTheThings() T-Shirt (Red) | 18.99 |