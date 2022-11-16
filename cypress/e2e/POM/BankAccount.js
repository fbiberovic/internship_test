class BankAccount{

    static navigate3(){
        cy.visit('http://localhost:3000/bankaccounts')
    }

    static CreateBtn(){
        cy.get('[data-test="bankaccount-new"]').click()
    }

    static DeleteBtn(){
        cy.get('[data-test="bankaccount-delete"]').click()
    }

    static BankName(){
        cy.get('#bankaccount-bankName-input').type(bankname)
        return this;
    }

    static RoutingNumber(){
        cy.get('#bankaccount-routingNumber-input').type(routingnumber)
        return this;
    }

    static AccountNumber(){
        cy.get('#bankaccount-accountNumber-input').type(accountnumber)    
        return this;
    }

    static SaveBtn(){
        cy.get('[data-test="bankaccount-submit"]').click()
    }

}

export default BankAccount;
