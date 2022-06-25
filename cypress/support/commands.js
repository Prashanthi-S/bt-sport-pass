// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import "cypress-iframe";
import { AccountPage } from "../support/PageObjects/AccountPage";
import { UserDetailsPage } from "../support/PageObjects/UserDetailsPage";
import { BillingAddrPage } from "../support/PageObjects/BillingAddrPage";

Cypress.Commands.add("acceptBTCookies", () => {
  cy.visit("/");
  cy.frameLoaded('iframe[title="TrustArc Cookie Consent Manager"]');
  cy.iframe('iframe[title="TrustArc Cookie Consent Manager"]')
    .should("be.visible")
    .find(".pdynamicbutton")
    .find(".call")
    .click({ force: true });
});

Cypress.Commands.add("gotoUserDetailsPage", () => {
  const account = new AccountPage();
  account.fillAccountForm("test@email.com", "Treat@12");
  cy.get('[data-testid="account-form-submit"]').click();
});

Cypress.Commands.add("gotoBillingAddrPage", () => {
  const userDetails = new UserDetailsPage();
  userDetails.fillUserDetails(
    "John",
    "test",
    "07438123321",
    { date: "11", month: "04", year: "1988" },
    "test"
  );
});

Cypress.Commands.add("gotoBillingCardDetailsPage", () => {
  const addrDetails = new BillingAddrPage();
  addrDetails.fillBillingAddr(
    "EC2A 2EW",
    "Twelfth Floor, Broadgate Tower, 20 Primrose Street, London, EC2A 2EW"
  );
});
