const { client } = require('nightwatch-api');
const {Then } = require('cucumber');

Then(/^the title is "([^"]*)"$/, title => {
    return client.assert.title(title);
});

Then(/^the Google search form exists$/, () => {
    return client.assert.visible('input[name="q"]');
});