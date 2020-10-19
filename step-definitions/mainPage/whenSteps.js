const { client } = require('nightwatch-api');
const { When } = require('cucumber');

When(/^I select '([^']*)' as Time Frame$/, async (frameValue) => {
    await client.page.mainPage().setTimeFrame(client, frameValue);
});

When(/^I select '([^']*)' as Instrument$/, async (instrumentName) => {
     await client.page.mainPage().selectInstrument(instrumentName);
});