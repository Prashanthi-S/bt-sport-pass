import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import { AccountPage } from "../../support/PageObjects/AccountPage";

Given("User visit the url it should accept cookies popup", () => {
    cy.acceptBTCookies()
});

When("User fills the invalid Email address and password", () => {
    const account = new AccountPage();
    account.fillAccountForm('test', 'abc');
});

Then("User should see validation errors", () => {
    cy.get('[data-testid="email-feedback"]')
        .should('be.visible')
        .should('have.text', 'Enter an email address in the correct format, like name@example.com');
    cy.get('[data-testid="password-feedback"]')
        .should('be.visible')
        .should('have.text', 'Choose a password without sequences of numbers or letters, like 123 or abc'); 
})

Then("all three password errors should be displayed", () => {
    cy.get('[data-testid="password-requirements"] ul li')
        .should('have.length', 3)
        .each($elm => {
            cy.wrap($elm).should('have.attr', 'data-invalid', 'true')
        })
})