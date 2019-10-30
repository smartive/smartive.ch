import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import logo from './smartive.svg';
import logoNegativ from './smartive-negativ.svg';

import './logo.scss';

export const Logo = ({ isNegativ }) => (
  <Link to="/" className="logo">
    <img src={isNegativ ? logoNegativ : logo} alt="smartive" />
  </Link>
);

export default Logo;

Logo.propTypes = {
  isNegativ: PropTypes.bool,
};

Logo.defaultProps = {
  isNegativ: false,
};
