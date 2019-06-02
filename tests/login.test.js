import { Selector } from 'testcafe'
import IndexPage from '../pageObjects/index-page'
import LoginPage from '../pageObjects/login-Page'


const indexPage  = new IndexPage()
const loginPage = new LoginPage()

//prettier-ignore
fixture('Login_Test')
.page('http://automationpractice.com/index.php')
.beforeEach(async t =>{
    await t.maximizeWindow
})

test("should try to login with valid credentials", async t =>{
    await t
        .click(indexPage.signIn)
        .expect (loginPage.alreadyRegistered.innerText)
            .eql('ALREADY REGISTERED?')
    loginPage.login('gaming.shilpa@gmail.com','Test123')
    await t.expect(Selector('span').innerText).contains('Shilpa Basu')
})
