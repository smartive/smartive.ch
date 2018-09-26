import React from 'react';
import PropTypes from 'prop-types';

import './facts.scss';

export const Facts = ({ title, children }) => (
  <div className="facts">
    <div className="row">
      <div className="facts-body col-xs-12">
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  </div>
);

Facts.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Facts;
