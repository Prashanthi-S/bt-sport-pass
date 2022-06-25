import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import { UserDetailsPage } from "../../support/PageObjects/UserDetailsPage";

Given("User visit the user details page", () => {
  cy.acceptBTCookies();
  cy.gotoUserDetailsPage();
});

When("User fills the invalid input details", () => {
  const userDetails = new UserDetailsPage();
  userDetails.fillUserDetails(
    "a",
    "b",
    "098",
    { date: 0, month: -1, year: 98 },
    "test"
  );
});

Then("User should see validation errors", () => {
  cy.get('[data-testid="firstName-feedback"]').should(
    "have.text",
    "First name must have at least 2 characters"
  );
  cy.get('[data-testid="lastName-feedback"]').should(
    "have.text",
    "Last name must have at least 2 characters"
  );
  cy.get('[data-testid="contactNumber-feedback"]').should(
    "have.text",
    "Your number must be at least 10 digits. Include your area code if you’re entering a landline"
  );
  cy.get('[data-testid="dob-feedback"]').should(
    "have.text",
    "Date of birth must include a month"
  );
});

And("User enters valid data and click submit", () => {
  cy.gotoBillingAddrPage();
});
