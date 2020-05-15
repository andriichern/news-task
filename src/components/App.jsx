import React from 'react';
import PropTypes from 'prop-types';
import { Provider as ReduxProvider } from 'react-redux';
import HomePage from 'components/pages/Home';

const App = ({ store }) => {
  return (
    <ReduxProvider store={store}>
      <HomePage />
    </ReduxProvider>
  );
};

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
