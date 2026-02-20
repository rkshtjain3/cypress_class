const { api1 } = require("../pages/apiRequest");

describe('Test SUite for API', function () { 
    it('API testing for GET request', function () { 
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1')
        .then(function (response) { 
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('id', 1);
            expect(response.body).to.have.property('title');
            expect(response.body).to.have.property('body');
        })
    })

    it('First', function () { 
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1').then(function (response) { 
            cy.log(JSON.stringify(response));
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('userId', 1);
        })
    })

    it('API testing for POST request', function () { 
        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', {
            title: 'foo',
            body: 'bar',
            userId: 1
        }).then(function (response) { 
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('id');
            expect(response.body).to.have.property('title', 'foo');
            expect(response.body).to.have.property('body', 'bar');
            expect(response.body).to.have.property('userId', 1);
        })
        
    })  

    //cy.request(api1)
})