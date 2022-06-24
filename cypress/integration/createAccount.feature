Feature: Create account

    Scenario: Create account and validations

        Given User visit the url it should accept cookies popup
        When User fills the invalid Email address and password
        Then User should see validation errors
        Then all three password errors should be displayed
        And user enters valid inputs
        Then user should create account