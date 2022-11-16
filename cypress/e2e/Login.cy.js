
import Login from "./POM/LoginPage";
/// <reference types="cypress" />


describe('User should be able to login', () =>{
    before(function() {

        cy.fixture('credentials').then(function(data){
            globalThis.data = data;
        })
    })
        it('Login with valid credentials', () => {
            Login.navigate2()
            Login.enterUsername(this.data.username)
            Login.enterPassword(this.data.password)
            Login.SignInBtn();

            cy.contains("Account Balance").should('be.visible')

        })
})