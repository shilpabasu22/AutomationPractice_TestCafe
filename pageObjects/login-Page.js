const { Selector } = require('testcafe');

function select(selector) {
    return Selector(selector).with({boundTestRun: testController});
}

exports.loginPage = {
    email: function(){
        return select('#email')
    },
    password: function() {
        return select('#passwd')
    },
    submitLogin: function() {
        return select('#SubmitLogin')
    },
    alreadyRegistered: function() {
        return select('.page-subheading').withText('ALREADY REGISTERED?').with({ boundTestRun: testController })
    },
    loginName: function(){
        return select('span').with({ boundTestRun: testController })
    }
}

// class LoginPage{
//     constructor(){
//         this.alreadyRegistered = Selector('.page-subheading').withText('ALREADY REGISTERED?').with({ boundTestRun: testController });
//         this.emailAddress = Selector('#email').with({ boundTestRun: testController });
//         this.password = Selector('#passwd').with({ boundTestRun: testController });
//         this.submitLogin = Selector('#SubmitLogin').with({ boundTestRun: testController });

//     }
//     async email(username){
//         await t
//         .typeText(this.emailAddress, username, {paste: true, replace : true})
//     }
//     async password( password){
//       await t
//             .typeText(this.password, password, {paste: true, replace : true})
            
//     }
//     async submitLogin(){
//         await t
//             .click(this.submitLogin)
//     }
// }

// export default LoginPage