describe('First one', function() {

    test('demo test', function(browser) {
        browser
            .url("https://news.ycombinator.com")
            .waitForElementVisible('.hnname')
            .assert.containsText(".hnname", "Hacker News");
    });

});