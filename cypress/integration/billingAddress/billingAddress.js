import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import { BillingAddrPage } from "../../support/PageObjects/BillingAddrPage";

Given("User visit the Billing details page", () => {
  cy.acceptBTCookies();
  cy.gotoUserDetailsPage();
  cy.gotoBillingAddrPage();
});

When("User fills the invalid input details", () => {
  const billingAddress = new BillingAddrPage();
  billingAddress.fillBillingAddr("test1");
});

Then("User should see validation errors", () => {
  cy.get("#postCode-feedback").should("have.text", "Enter a UK postcode");
});

And("User enters valid data and click submit", () => {
  const billingAddress = new BillingAddrPage();
  billingAddress.fillBillingAddr("EC2A 2EW", "Twelfth Floor, Broadgate Tower, 20 Primrose Street, London, EC2A 2EW");  
});

Then("User should land on Billing card details page", () => {
  cy.get('[data-testid="billingAddressText"]').should('have.text', 'Billing address')
})
