/* eslint no-undef: 'off' */
import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';
import configuereStore from './store';
import 'styles/main.scss';

const store = configuereStore();

render(<App store={store} />, document.getElementById('app'));

if (process.env.NODE_ENV === 'development') {
  module.hot.accept();
}
