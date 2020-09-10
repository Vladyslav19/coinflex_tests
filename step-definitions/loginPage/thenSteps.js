const { client } = require('nightwatch-api');
const {Then } = require('cucumber');

Then(/^The main page open$/, async()=> {
        const page = client.page.loginPage()
        page.openMainPage(client);
});

