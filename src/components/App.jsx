import React from 'react';
import PropTypes from 'prop-types';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from 'components/common/Header';
import Routes from './Routes';

const App = ({ store }) => {
  return (
    <ReduxProvider store={store}>
      <Router>
        <>
          <Header />
          <Routes />
        </>
      </Router>
    </ReduxProvider>
  );
};

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
