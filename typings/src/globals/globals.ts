interface IApp {
    coinflex: {
        adminUserId: string;
        loginPassword: string;
    };
}

const appConfig: IApp = {
    coinflex: {
        /** Financials admin user id for logging into financials */
        adminUserId: `${process.env.USER_ID}`,
        /** Password used for logging into financials. */
        loginPassword: `${process.env.PASSWORD}`
    }
};

interface IBrowserUrlConfig {
    coinflexRootUrl: string;
}
const browserUrlConfig: IBrowserUrlConfig = {
    coinflexRootUrl: `${process.env.AUTH_PROTOCOL}://${process.env.INSTANCE_NAME}.coinflex.com`
};


interface IDefaults {
    /** a default timeout in milliseconds */
    timeout: number;
    /** the max timeout in milliseconds */
    maxTimeout: number;
    /** selenium lookup strategy */
    lookupStrategy: string;
}

let defaultConfig: IDefaults;
defaultConfig = {
    timeout: 15000,
    maxTimeout: 240000,
    lookupStrategy: 'css selector'
};

module.exports = {
    // controls the timeout value for async hooks. Expects the done() callback to be invoked within this time
    // or an error is thrown
    asyncHookTimeout: 240000,

    // Controls the timeout value for when executing the global async reporter. Expects the done() callback
    // to be invoked within this time or an error is thrown
    customReporterCallbackTimeout: 240000,

    // Automatically retrying failed assertions - You can tell Nightwatch to automatically retry failed assertions
    // until a given timeout is reached, before the test runner gives up and fails the test.
    retryAssertionTimeout: 10000,

    app: appConfig,
    browserUrl: browserUrlConfig,
    defaults: defaultConfig
};
