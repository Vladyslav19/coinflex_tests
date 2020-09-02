import { When } from 'cucumber';
import {client} from 'nightwatch-api';

When(/^I logged as test user$/, async () => {
    await client.page.loginPage().loginViaAPI();
});
