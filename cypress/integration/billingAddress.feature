Feature: Billing address details

    Scenario: enter billing address details

        Given User visit the Billing details page
        When User fills the invalid input details
        Then User should see validation errors