const { getFirstName,
    getCourse,
    getEmail,
    getLastName,
    getMessage,
    getPhone,
    getSubmitButton, submitForm } = require("../pages/homePage");

describe("Homepage Form Tests", () => {
    let usersValue = '';
    
    beforeEach(function () { 
        cy.openHome();
        cy.fixture('users.json').as('usersData');
    })

    it("Verify form is visible", () => {
        cy.get('form').should('be.visible');
    });

    it.only("Verify all form fields are present",function() {
        //let userName1 = '';
        /*cy.env(['userName', 'password']).then(function ({userName, password}) { 
            //usersValue = userName;
            //cy.log('env', userName);
        })*/
        

//use Cypress.env, it is synchronous and hence give result straight away
//if we use cy.env() we need to use .then() as it is asynchronous as it returns results later
//Also for cy.env(), we need to add the values as as array
//Also use allowCypressEnv: true, in config file inside defineconfig

        cy.log('usernameee',Cypress.env('userName'))
        getFirstName().type(Cypress.env('userName'));
        getLastName().should('be.visible').type(Cypress.env('password'));
        getEmail().should('be.visible');
        getPhone().should('be.visible');
        getCourse().should('be.visible');
        getMessage().should('be.visible');
        getSubmitButton().last().should('be.visible');
    });

    it("Verify course dropdown options", () => {
        let courseOptions = [
            'Select a course',
            'Manual Testing Fundamentals',
            'Selenium + Java Automation',
            'Cypress Automation Testing',
            'API Testing with Postman',
            'AI-Powered Testing with Amazon Q',
            'Complete Testing Bootcamp'
        ];
        cy.get('select[name="course"]').find('option').each(function (element) { 
            expect(courseOptions).to.include(element.text());
        });
    });

    it("Verify form submission with valid data", function () {
        let data=this.usersData

        for (let i = 0; i < this.usersData.length; i++) { 
            submitForm(data[i].firstName, data[i].lastName, data[i].email, data[i].phone, data[i].course, data[i].message);
        }
    });

    it("Verify required field validation", function () {
        
        
        getSubmitButton().click();
        cy.get('input[name="firstName"]:invalid').should('exist');
        cy.get('input[name="lastName"]:invalid').should('exist');
        cy.get('input[name="email"]:invalid').should('exist');
        cy.get('input[name="phone"]:invalid').should('exist');
    });

});
