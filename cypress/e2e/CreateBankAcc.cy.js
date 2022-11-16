import BankAccount from "./POM/BankAccount";
import Login from "./POM/LoginPage";


describe('User should be able to create bank account', () =>{
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
        })

        it('Creates new bank account', () =>{
            BankAccount.navigate3()
            BankAccount.BankName(this.data.bankname)
            BankAccount.RoutingNumber(this.data.routingnumber)
            BankAccount.BankAccount(this.data.accountnumber)
            BankAccount.SaveBtn();

            })
        })

