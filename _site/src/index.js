import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

import './index.css';

ReactDom.render(
    <App />,
    document.getElementById("root")
)

// Hot Module Replacement API
if (module.hot) {
	module.hot.accept('./App', () => {
		const NextApp = require('./App').default;
    	ReactDom.render(NextApp)
  	});
}