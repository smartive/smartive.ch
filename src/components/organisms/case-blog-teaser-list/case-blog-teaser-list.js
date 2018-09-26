import React from 'react';
import PropTypes from 'prop-types';

import { MediumTeaser } from '../medium-teaser';

import './case-blog-teaser-list.scss';

export const CaseBlogTeaserList = ({ posts }) => (
  <div className="case-blog-teaser-list">
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <div className="case-blog-teaser-list__title">
            <h2>Wollen Sie mehr zum Thema erfahren?</h2>
            <h3>Ausgewählte Beiträge auf unserem Blog</h3>
          </div>
        </div>
      </div>
    </div>
    <MediumTeaser posts={posts} />
  </div>
);

CaseBlogTeaserList.propTypes = {
  posts: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default CaseBlogTeaserList;
