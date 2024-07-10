import React from 'react';
import PropTypes from 'prop-types';
// import template from '../stories/modules/banner.mustache';

import TemplateComponent from 'react-mustache-template-component';

const data = {
  name: 'hossam',
  item: {
    name: 'Apple',
    price: 100,
    quantity: 1,
  },
};

export const Header = ({ user, onLogin, onLogout, onCreateAccount }) => {
  // return <TemplateComponent template={template} data={data} />;
};

Header.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};
