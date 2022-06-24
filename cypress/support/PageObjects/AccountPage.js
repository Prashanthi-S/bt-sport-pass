export class AccountPage {
    fillAccountForm(email, password) {
        const account = cy;
        account.get('[data-testid="email"]')
                .should('be.visible')
                .clear()
               .type(email);
        account.get('[data-testid="password"]')
                .should('be.visible')
                .clear()
                .type(password)
        account.get('label[for="email-contact"]').click({force: true})
    }
}