const { Selector } = require('testcafe');

function select(selector) {
    return Selector(selector).with({boundTestRun: testController});
}

exports.register = {
    createAnAccount: function() {
        return select('p').withText('Please enter your email address to create an account.').with({ boundTestRun: testController })
    },
    createEmail: function(){
        return select('#email_create')
    },
    submitCreate: function(){
        return select('#SubmitCreate')
    },
    personalInformation: function(){
        return select('#account-creation_form > div:nth-child(1) > h3').with({ boundTestRun: testController })
    }

}