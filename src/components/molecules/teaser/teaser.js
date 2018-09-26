import React from 'react';
import PropTypes from 'prop-types';

import './teaser.scss';

export const Teaser = ({ title, subline, children }) => (
  <div className="teaser col-xs-12 col-sm-6 col-lg-4">
    <div className="teaser__content">
      <h2>
        <small>{subline}</small>
        {title}
      </h2>

      {children ? <div className="description">{children}</div> : null}
    </div>
  </div>
);

Teaser.propTypes = {
  title: PropTypes.string.isRequired,
  subline: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

Teaser.defaultProps = {
  children: null,
};

export default Teaser;
