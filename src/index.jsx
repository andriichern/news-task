import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';
import configuereStore from './store';
const store = configuereStore();

render(<App store={store} />, document.getElementById('app'));

module.hot.accept();
