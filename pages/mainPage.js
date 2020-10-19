module.exports = {
    url: 'https://trading-options-demo.coinflex.com/',
    elements: {
        timeFrameSelector: '.styles_time__input__2Qqvc',
        chart: '#styles_chart__tR87p',
        instrumentOver: '[data-id="over"]',
        instrumentUnder: '[data-id="under"]',
        instrumentHighLine: '[data-id="highline"]',
        instrumentLowLine: '[data-id="lowline"]',
        instrumentHighTouch: '[data-id="hightouch"]',
        instrumentLowTouch: '[data-id="lowtouch"]',
        instrumentDoubleNoTouch: '[data-id="double_no_touch"]',
        instrumentTunnel: '[data-id="tunnel"]',
        instrumentOverTugOfWar: '[data-id="over_tug_of_war"]',
        instrumentUnderTugOfWar: '[data-id="under_tug_of_war"]'
    },

    commands: [{
        async setTimeFrame(browser, frameValue) {
            await browser.click('@timeFrameSelector');
            await browser.waitForElementVisible('@timeFrameSelector');
            await browser.getElementByText('@timeFrameSelector', frameValue)
        },
        async getElementByText(browser, selector, text) {
            let element = null;
            await browser.elements('css selector', selector, async function (elements) {
                let success = false;
                for (let i = 0; i < elements.value.length && success === false; i++) {
                    await browser.elementIdText(elements.value[i].ELEMENT, result => {
                        if (result.value === text) {
                            success = true;
                            element = elements.value[i].ELEMENT;
                        }
                    });
                }
            });
            browser.perform(function () {
                if (element === null) {
                    throw new TypeError(`Element
                    was
                    not
                    found
                    with text: ${text}`
                )
                    ;
                } else {
                    browser.elementIdClick(element);
                }
            })
        },
        async openMainPage() {
            await this
                .navigate()
                .waitForElementVisible('@chart');
        },
        async selectInstrument(instrumentName) {
            await this
                .click(`@instrument${instrumentName}`)
                .pause(3000);
        }
    }]

}




