module.exports = {
    'My first testcase'(browser) {
        browser
            .url("https://news.ycombinator.com")
            .waitForElementVisible('.hnname')
            .assert.containsText(".hnname", "Hacker News");
    }
}