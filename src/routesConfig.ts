import { RoutesConfig } from './components/Router/Router';

export const routesConfig: RoutesConfig = {
    '/': () => import('./routes/Index'),
    '/todos': () => import('./routes/Todos'),
    '/todos/:id': () => import('./routes/Todos'),
    '404': () => import('./routes/Route404'),
};
