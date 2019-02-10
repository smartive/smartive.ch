import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

export const Button = ({ text, onClick }) => (
  <button className="button" onClick={onClick}>
    {text}
  </button>
);

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: () => null,
};
