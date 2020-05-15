import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';
import configuereStore from './store';
// import url from "./styles/style.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "react-toastify/dist/ReactToastify.css";
const store = configuereStore();

render(<App store={store} />, document.getElementById('app'));

module.hot.accept();
