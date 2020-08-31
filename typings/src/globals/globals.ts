import { hrTestData, IHRTestData } from './test_data/test_data';

interface IApp {
    financials: {
        adminUserId: string;
        loginPassword: string;
    };
}

const appConfig: IApp = {
    financials: {
        /** Financials admin user id for logging into financials */
        adminUserId: `${process.env.FINANCIALS_ADMIN_USER_ID}`,
        /** Password used for logging into financials. */
        loginPassword: `${process.env.FINANCIALS_TEST_PASSWORD}`
    }
};

interface IBrowserUrlConfig {
    financialsLogin: string;
    financialsRootUrl: string;
}
const browserUrlConfig: IBrowserUrlConfig = {
    financialsLogin: `${process.env.AUTH_PROTOCOL}://${process.env.FINANCIALS_ENTITY}.fms.${
        process.env.FINANCIALS_TEST_ENV
    }/login.aspx`,
    financialsRootUrl: `${process.env.AUTH_PROTOCOL}://${process.env.FINANCIALS_ENTITY}.fms.${
        process.env.FINANCIALS_TEST_ENV
    }/stw_php/`
};

interface IFinancials  extends IHRTestData {
    listOptionsQuantity: number;
    journal_entries: {
        id: string,
        description: string,
        isPosted: boolean
    };
    spooler: {
        jobName: string;
    };
}

export interface ITemp {
    financials: IFinancials;
}

let tempConfig: ITemp;
tempConfig = {
    financials: {
        listOptionsQuantity: null,
        ...hrTestData,
        journal_entries: {
            id: '',
            description: '',
            isPosted: false
        },
        spooler: {
            jobName: ''
        }
    }
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
    temp: tempConfig,
    defaults: defaultConfig
};
