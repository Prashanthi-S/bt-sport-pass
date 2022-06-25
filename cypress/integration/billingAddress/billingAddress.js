import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

Given("User visit the Billing details page", () => {
    cy.acceptBTCookies()
    const account = new AccountPage();
    account.fillAccountForm('test@email.com', 'Treat@12');
    cy.get('[data-testid="account-form-submit"]').click()
});

When("User fills the invalid input details", () => {
    
});

Then("User should see validation errors", () => {
     
})
