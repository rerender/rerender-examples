export const routesConfig = {
    '/': () => import('./routes/Index'),
    '/todos': () => import('./routes/Todos'),
    '/todos/:id': () => import('./routes/Todos')
};
