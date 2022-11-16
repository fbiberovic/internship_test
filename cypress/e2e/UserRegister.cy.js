import Register from "./POM/RegisterPage";
/// <reference types="cypress" />

describe('Testing User Register function at Cypress Real World app', () =>{
    before(function() {
        cy.fixture('credentials.json').then(function(data){
            globalThis.data = data;
        })
    })
    it('Register User', () => {
        Register.navigate();
        Register.enterFirstName(this.data.firstname);
        Register.enterLastName(this.data.lastname);
        Register.enterUsername(this.data.username);
        Register.enterPassword(this.data.password);
        Register.SignUpBtn();

       

    })

})