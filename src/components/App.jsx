import React from 'react';
import PropTypes from 'prop-types';
import { Provider as ReduxProvider } from 'react-redux';

const App = ({ store }) => {
  return (
    <ReduxProvider store={store}>
      <div>App component</div>
    </ReduxProvider>
  );
};

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
