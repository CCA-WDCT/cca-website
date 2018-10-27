import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Comps from './comps';

ReactDOM.render(<Comps />, document.getElementById('root'));
registerServiceWorker();
