export class UserDetailsPage {
  fillUserDetails(firstName, lastName, phone, dob, maidenName) {
    const user = cy;
    user
      .get('[data-testid="firstName"]')
      .clear()
      .type(firstName)
      .should("have.value", firstName);
    user
      .get('[data-testid="lastName"]')
      .clear()
      .type(lastName)
      .should("have.value", lastName);
    user
      .get('[data-testid="contactNumber"]')
      .clear()
      .type(phone)
      .should("have.value", phone);
    user
      .get('[data-testid="dobDay"]')
      .clear()
      .type(dob.date)
      .should("have.value", dob.date);
    user
      .get('[data-testid="dobMonth"]')
      .clear()
      .type(dob.month)
      .should("have.value", dob.month);
    user
      .get('[data-testid="dobYear"]')
      .clear()
      .type(dob.year)
      .should("have.value", dob.year);
    user
      .get('[data-testid="security"]')
      .clear()
      .type(maidenName)
      .should("have.value", maidenName);
    user.get('[data-testid="personal-details-form-submit"]').click();
  }
}
