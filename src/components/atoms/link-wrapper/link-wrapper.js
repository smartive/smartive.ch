import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

export const LinkWrapper = ({ children, className, to }) => {
  const internal = /^\/(?!\/)/.test(to);

  if (internal) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a href={to} className={className}>
      {children}
    </a>
  );
};

export default LinkWrapper;

LinkWrapper.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

LinkWrapper.defaultProps = {
  className: '',
};
