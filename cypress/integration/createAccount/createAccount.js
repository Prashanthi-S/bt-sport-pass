import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

Given("User visit the url it should close cookies popup", () => {
    cy.acceptBTCookies()
});

When("User fills the invalid Email address and password", () => {
    
});

Then("User should see validation errors", () => {
    
})
