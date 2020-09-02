import { Then } from 'cucumber';
import {client} from 'nightwatch-api';

Then(/^main page is opened$/, async () => {
    await client.page.CoinflexLoginPage();
});
