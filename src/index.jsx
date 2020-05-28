/* eslint no-undef: 'off' */
import React from 'react';
import { render } from 'react-dom';
import { wrap } from 'comlink';
import App from './components/App.jsx';
import remoteStoreWrapper from 'store/remoteStoreWrapper';
import 'styles/main.scss';

async function run() {
  const worker = new Worker('./store/worker.js', {
    type: 'module',
  });

  const remoteStore = await wrap(worker);
  const store = await remoteStoreWrapper(remoteStore);

  render(<App store={store} />, document.getElementById('app'));
}

run();

if (process.env.NODE_ENV === 'development') {
  module.hot.accept();
}
