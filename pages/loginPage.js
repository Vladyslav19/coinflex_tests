

const commands: {
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
}