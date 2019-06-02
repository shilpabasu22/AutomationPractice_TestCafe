const {Given, When, Then} = require('cucumber');

const registerPage = require('../../pageObjects/register-page')
const indexPage = require('../../pageObjects/index-page')

Given('I navigate to Register Page', async function () {
    await testController
        .click(indexPage.indexPage.signIn())
        .expect(registerPage.register.createAnAccount().innerText)
        .eql('Please enter your email address to create an account.')
});

When('I register with my username as {string}', async function (email) {
    await testController
        .typeText(registerPage.register.createEmail(), email)
});


When('I press the Create Account Button', async function () {
    await testController
        .click(registerPage.register.submitCreate())
});


Then('I am displayed Personal Information Page', async function () {
    await testController
        .expect(registerPage.register.personalInformation().innerText)
        .eql('YOUR PERSONAL INFORMATION')
});