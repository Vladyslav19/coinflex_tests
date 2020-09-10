const { client } = require('nightwatch-api');
const { Given} = require('cucumber');

Given(/^I am logged in via API$/, async () => {
   await client.page.loginPage().setAuthCookies(client);
});