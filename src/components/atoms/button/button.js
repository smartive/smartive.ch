import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import './button.scss';

const mod = modifier => ` button--${modifier}`;

export const Button = ({ url, text, isPrimary, isWhite, hasBorder }) => {
  const internal = /^\/(?!\/)/.test(url);
  const className = `button${isPrimary ? mod('primary') : ''}${isWhite ? mod('white') : ''}${hasBorder ? ' has-border' : ''}`;
  if (internal) {
    return (
      <Link to={url} className={className}>
        {text}
      </Link>
    );
  }
  return (
    <a href={url} className={className}>
      {text}
    </a>
  );
};

export default Button;

Button.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isPrimary: PropTypes.bool,
  isWhite: PropTypes.bool,
  hasBorder: PropTypes.bool,
};

Button.defaultProps = {
  isPrimary: false,
  isWhite: false,
  hasBorder: false,
};
