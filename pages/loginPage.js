 const fetch = require('node-fetch');

const commands = {
    async loginViaAPI() {
        fetch('https://api-options-demo.coinflex.com/api/autotest-sessions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                user: {
                    email: 'vradko@strongqa.com',
                    password: 'Vladok190294',
                }
            }
        }).then(res => {
            console.log(res);
        });
    },
}

module.exports = {

    elements: {},
    commands
}