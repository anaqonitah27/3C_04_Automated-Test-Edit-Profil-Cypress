describe('Edit Profile Pengguna', () => {
  it('I can search for content', () => {
    cy.visit('https://malangsnack.000webhostapp.com/index.php?page=login');
    cy.get("input[name='email']").type('anaqonitah@gmail.com');
    cy.get("input[name='password']").type('ujiantesting123').type('{enter}');
    cy.get("button[class='swal-button swal-button--confirm']").type('{enter}');

    cy.get("img[src='https://malangsnack.000webhostapp.com/assets/images/profile/default.png']").type('{enter}');
    cy.get("input[name='name']").clear();
    cy.get("input[name='name']").type('Indana Zulfa');
    cy.get("input[name='phone_number']").clear();
    cy.get("input[name='phone_number']").type('08534322321');
    cy.get("textarea[name='address']").clear();
    cy.get("button[class='btn btn-primary light btn-md']").type('{enter}');
  });
});