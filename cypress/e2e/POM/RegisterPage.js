class Register{
    static navigate(){
        cy.visit('http://localhost:3000/signup')
    }

    static enterFirstName(){
        cy.get('#firstName').type()
        return this;
    }

    static enterLastName(){
        cy.get('#lastName').type()
        return this;
    }

    static enterUsername(){
        cy.get('#username').type()
        return this;
    }

    static enterPassword(){
        cy.get('#password').type()
        return this;
    }

    static confirmPassword(){
    cy.get('#confirmPassword').type()
    return this;
    }

    static SignUpBtn(){
        cy.get('[data-test="signup-submit"]').click()
    }

}

export default Register;