import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

export const Button = ({ text, onClick, disabled }) => (
  <button type="button" className="button" onClick={onClick} disabled={disabled}>
    {text}
  </button>
);

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  onClick: () => null,
  disabled: false,
};
