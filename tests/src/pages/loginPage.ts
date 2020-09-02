//import { client } from 'nightwatch-api';

import { NightwatchBrowser } from 'nightwatch';

import { INightwatchPageObjects } from '../../../typings';

import { fetch } from 'node-fetch';

const commands = {
    async loginViaAPI () {
        fetch('https://api-options-demo.coinflex.com/api/autotest-sessions', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'origin': 'https://options-demo.coinflex.com',
                'referer': 'https://options-demo.coinflex.com/login.html?invalidateToken=true',
                'authority': 'api-options-demo.coinflex.com',
                'path': '/api/autotest-sessions',
                'scheme': 'https',
            },
            body:{
                user :{
                    email: `${process.env.USER_ID}`,
                    password: `${process.env.PASSWORD}`,
                }
            }
            }).then(res => {
                console.log(res);
            });
    },

    async openPage(browser: NightwatchBrowser) {
        await browser.page
            .CoinflexLoginPage()
    }
}

interface ICoinflexLoginPageObject extends INightwatchPageObjects {
    elements: {}
}

const loginPage: ICoinflexLoginPageObject = {
    url() {
        return process.env.coinflexRootUrl;
    },
    elements: {},
    commands: [commands]
};

// Nightwatch does not support es6 default exports so we have to do it this way

module.exports = loginPage