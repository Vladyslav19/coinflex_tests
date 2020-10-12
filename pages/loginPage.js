const axios = require('axios');
const fs = require('fs');


// Check that the .env file exists as environment variables declared there are used to set values in the
// ... global object initialized by nightwatch
if (fs.existsSync('.env') === false)
    throw Error('No .env file found! Please create a .env file. For further information please read the README.md');
// Now we can require env2 since we know the .env file exists
require('env2')('.env');

const commands = {
    async getAuthToken() {
        return await axios.post('https://api-options-demo.coinflex.com/api/autotest-sessions', {
            user: {
                email: `${process.env.USER_ID}`,
                password: `${process.env.PASSWORD}`
            }
        })
            .then(async response => {
                   return response.data.data.token;
            })
            .catch(function (error) {
                throw Error(error);
            });
    },
    async setAuthCookies(browser){
        await browser.url('https://options-demo.coinflex.com/login.html');
       const data = await this.getAuthToken();
       browser.setCookie({
           name : "cfo_token_demo",
           value : data,
           domain : ".coinflex.com",
           path : "/",
           httpOnly : false,
           secure   : false,
       })
    },
    async openMainPage() {
        await this
            .navigate()
            .waitForElementVisible('@chart');
    }
}

module.exports = {
    url: 'https://trading-options-demo.coinflex.com/',
    elements: {
        chart: '#styles_chart__tR87p',
        email: '#login:email'
    },
    commands: [commands]
}