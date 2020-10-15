module.exports = {
    elements: {
        timeFrameSelector: 'input[class=styles_time__input]',
        timeFrameValue: 'styles_time__item[value=`5 minutes`]'


    },

    commands: [{
        setTimeFrame(selector, value) {
            return this
                .click(selector)
                .click('@timeFrameSelector[value=`${value}`]')
        },

        getElementByText(selector,text) {
            let element = null;
            client.pause(1000);
            this.elements('css selector', selector, function (elements) {
                let success = false;
                for (let i = 0; i < elements.value.length && success === false; i++) {
                    this.elementIdText(elements.value[i].ELEMENT, result => {
                        if (result.value === text) {
                            success = true;
                            element = elements.value[i].ELEMENT;
                        }
                    });
                }
            });
            this.perform(function () {
                if (element === null) {
                    throw new TypeError(`Element
                    was
                    not
                    found
                    with text: ${text}`
                )
                    ;
                } else {
                    this.elementIdClick(element);
                }
            })
        }
    }]

}




