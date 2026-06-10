exports.getFirstName = function() { 
    return cy.get('input[name="firstName"]');
}

exports.getLastName = function () { 
    return cy.get('input[name="lastName"]');
}

exports.getEmail = function () { 
    return cy.get('input[name="email"]');
}

exports.getPhone = function () { 
    return cy.get('input[name="phone"]');
}

exports.getCourse = function () { 
    return cy.get('select[name="course"]');
}

exports.getMessage = function () { 
    return cy.get('textarea[name="message"]');
}

exports.getSubmitButton = function () { 
    return cy.get('button[type="submit"]');
}

exports.submitForm = function (firstName, lastName, email, phone, course, message) { 
    exports.getFirstName().type(firstName);
    exports.getLastName().type(lastName);
    exports.getEmail().type(email);
    exports.getPhone().type(phone);
    exports.getCourse().select(course);
    exports.getMessage().type(message);
    exports.getSubmitButton().last().click();
}




