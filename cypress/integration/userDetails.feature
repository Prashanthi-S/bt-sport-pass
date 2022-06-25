Feature: User details

    Scenario: enter user details

        Given User visit the user details page
        When User fills the invalid input details
        Then User should see validation errors