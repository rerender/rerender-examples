import { h, renderClient } from 'rerender';
import Application, { routesConfig } from './components/Application/Application';
import Index from './routes/Index';

renderClient(<Application Route={Index} />, document.getElementById('#root'));
