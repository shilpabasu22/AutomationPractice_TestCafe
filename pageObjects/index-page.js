const { Selector } = require('testcafe');

function select(selector) {
    return Selector(selector).with({boundTestRun: testController});
}

exports.indexPage = {
    url: function() {
        return 'http://automationpractice.com/index.php';
    },
    signIn: function() {
        return select('.login');
    },
    contactUs: function() {
        return select('a').withText('Contact us').with({ boundTestRun: testController });
    }
};

// class IndexPage{
//     constructor(){
//         this.url = 'http://automationpractice.com/index.php'
//         this.signIn = Selector('.login').with({ boundTestRun: testController });
//         this.contactUs = Selector('a').withText('Contact us').with({ boundTestRun: testController });
//     }

    

// }
    

// export default IndexPage