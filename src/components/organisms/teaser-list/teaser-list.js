import React from 'react';
import PropTypes from 'prop-types';

import './teaser-list.scss';

export const TeaserList = ({ children }) => (
  <div className="teaser-list">
    <div className="container">
      <div className="row center-sm left-lg">{children}</div>
    </div>
  </div>
);

TeaserList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default TeaserList;
