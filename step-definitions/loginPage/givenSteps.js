const { client } = require('nightwatch-api');
const { Given} = require('cucumber');

Given(/^I open Google's search page$/, async () => {
   await client.page.loginPage().loginViaAPI();
    client.url('http://google.com').waitForElementVisible('body', 1000);
});