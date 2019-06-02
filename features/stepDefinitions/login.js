const {Given, When, Then} = require('cucumber');
//const Role = require('testcafe').Role;
// import IndexPage from '../../pageObjects/index-page'
// import LoginPage from '../../pageObjects/login-Page'

const indexPage = require( '../../pageObjects/index-page')
const loginPage = require('../../pageObjects/login-Page')

  Given('I open AutomationPractice page', async function () {
    await testController // navigate to url
        .navigateTo(indexPage.indexPage.url());
  });


  Given('I navigate to Login Page', async function () {
    await testController
        .click(indexPage.indexPage.signIn())
        .expect (loginPage.loginPage.alreadyRegistered().innerText)
        .eql('ALREADY REGISTERED?')
  });


  When('I enter my username as {string}', async function (email) {
    await testController.typeText(loginPage.loginPage.email(),email)
  });


  When('I enter my password as {string}', async function (password) {
    await testController.typeText(loginPage.loginPage.password(),password)
  });



  When('I press the Login button', async function () {
    await testController.click(loginPage.loginPage.submitLogin())
  });


  Then('My name {string} is displayed', async function (username) {
    await testController
        .expect(loginPage.loginPage.loginName().innerText)
        .contains(username)
  });
