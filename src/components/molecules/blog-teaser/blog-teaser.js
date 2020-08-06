import React from 'react';
import PropTypes from 'prop-types';

import './blog-teaser.scss';

const getClassNames = (img) => {
  const classNames = ['blog-teaser', 'col-xs-12', img ? 'blog-teaser--image col-lg-7' : 'col-lg-5 first-lg'];

  return classNames.join(' ');
};

export const BlogTeaser = ({ url, subline, title, lead, img }) => (
  <div className={getClassNames(img)} style={img ? { backgroundImage: `url(${img})` } : {}}>
    <a className="blog-teaser__link" href={url}>
      <div className="blog-teaser__content">
        <h2>
          <small>{subline}</small>
          {title}
        </h2>
        <p>{lead}</p>
      </div>
    </a>
  </div>
);

BlogTeaser.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subline: PropTypes.string.isRequired,
  lead: PropTypes.string.isRequired,
  img: PropTypes.string,
};

BlogTeaser.defaultProps = {
  img: null,
};

export default BlogTeaser;
