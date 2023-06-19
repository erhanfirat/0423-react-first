describe('Test Başlığımız', function () {
    it('Product Sayfasını açma', function() {
        // arrange
        cy.visit('/');

        const productLink = cy.get('[data-cy=product-link]');

        // act

        productLink.click();


        // assertions

        productLink.should('have.class', 'active');
    })


    it('Product Sayfası filtreleme testi', function() {
        // arrange
        cy.visit('/');

        const productLink = cy.get('[data-cy=product-link]');

        // act

        productLink.click();

        const filterInput = cy.get('[data-cy=product-filter-input]');

        filterInput.type("al");

        cy.contains("Alberto Hayes");

        // assertions

        cy.get("[data-cy=product-name-h3]").first().should("have.text", "Alberto Hayes");

    })

    it('Product Yup Form sayfasını açma', function() {
        // arrange
        cy.visit('/');

        const productYupFormLink = cy.contains('Create Product Yup');

        // act

        productYupFormLink.click();

    })
})
