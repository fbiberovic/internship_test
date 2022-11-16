class Login{

    static navigate2(){
        cy.visit('http://localhost:3000/signin')
        return this;
    }

    static enterUsername(username){
        cy.get('#username').type(username)
        return this
    }

    static enterPassword(password){
        cy.get('#password').type(password)
        return this
    }

    static SignInBtn(){
        cy.get('[data-test="signin-submit"]').click()
    }
}

export default Login;