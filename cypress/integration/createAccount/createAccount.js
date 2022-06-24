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
            cy.wrap($elm).find('span').eq(0).find('svg > path').should('have.attr', 'fill', '#E60014');
        })
})

And('user enters valid inputs', () => {
    const account = new AccountPage();
    account.fillAccountForm('test@email.com', 'Treat@12');
});

Then('user should create account', () => {
    cy.get('[data-testid="password-requirements"] ul li')
        .should('have.length', 3)
        .each($elm => {
            cy.wrap($elm).should('have.attr', 'data-invalid', 'false')
            cy.wrap($elm).find('span').eq(0).find('svg > path').should('have.attr', 'fill', '#008A00');
        })
    cy.get('[data-testid="account-form-submit"]').click()
})