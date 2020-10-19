const { client } = require('nightwatch-api');
const { When } = require('cucumber');

When(/^I select '([^']*)' as Time Frame$/, async (frameValue) => {
    await client.page.mainPage().setTimeFrame(frameValue);
});
