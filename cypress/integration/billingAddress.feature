Feature: Billing address details

    Scenario: enter billing address details

        Given User visit the Billing details page
        When User fills the invalid input details
        Then User should see validation errors
        And  User enters valid data and click submit
        Then User should land on Billing card details page