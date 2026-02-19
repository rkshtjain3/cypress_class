describe("Contact Page Tests", () => {
    
    beforeEach(function () { 
        cy.openHome();
    })

    it("Verify the header list Negative", () => {
        cy.get('nav').should('be.visible');
        let headerList = ['Home', 'Courses', 'Blog', 'About'];
        cy.get('nav').find('a').each(function (element) { 
         expect(headerList).to.include(element.text())
        })
    });

    it("Verify the header list Positive", () => {
        cy.get('nav').should('be.visible');
        let headerList = ['Home', 'Courses', 'Practice', 'Career Switch', 'Interview Prep', 'Blog', 'About', 'Internship', 'Get Hired'];

        cy.get('nav').find('a').each(function (element) { 
         expect(headerList).to.include(element.text())
        })
    });
});