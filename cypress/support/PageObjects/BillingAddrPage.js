export class BillingAddrPage {
  fillBillingAddr(postcode, placeName) {
    const billing = cy;
    billing
      .get("#postCode")
      .clear()
      .type(postcode)
      .should("have.value", postcode);
    billing.get('[type="submit"]').click({force:true});
    if (placeName) {
      billing.get('#address').select(placeName);
    }
    billing.get('[type="submit"]').click({force:true});
  }
}
