import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Store from './AppStore';

ReactDOM.render(<Store.Container><App /></Store.Container>, document.getElementById('root'));
registerServiceWorker();
