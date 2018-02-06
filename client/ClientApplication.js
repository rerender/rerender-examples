import { renderClient, h } from 'rerender';
import Application from '../components/application/Application.js';

class ClientApplication {
    constructor(initialRoute) {
        renderClient(<Application initialRoute={initialRoute} />, { applicationId: 'application' });
    }
}

new ClientApplication(window.__INITIAL_ROUTE);
