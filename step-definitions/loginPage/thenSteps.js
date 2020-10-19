const { client } = require('nightwatch-api');
const {Then } = require('cucumber');

Then(/^The main page open$/, async()=> {
       await client.page.mainPage().openMainPage(client);
});

