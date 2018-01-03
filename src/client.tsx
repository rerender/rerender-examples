import { h, renderClient } from 'rerender';

import Application from './components/Application/Application';

renderClient(<Application />, document.getElementById('#root'));
