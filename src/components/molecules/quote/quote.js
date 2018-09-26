import PropTypes from 'prop-types';
import React from 'react';
import Img from 'gatsby-image';

import './quote.scss';

export const Quote = ({ text, author, img, company, url }) => (
  <div className="container">
    <div className="quote-block">
      <div className="row">
        <div className="col-xs-12 col-md-3">
          <Img className="quote__img" alt={`Portrait von ${author}`} fluid={img} />
        </div>
        <div className="col-xs-12.col-md-9 quote__body">
          <blockquote className="quote">
            <p>{text}</p>
            <cite>
              <span>
                {author}
                {company ? ', ' : null}
              </span>
              {url ? <a href={url}>{company}</a> : <span>{company}</span>}
            </cite>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
);

Quote.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  img: PropTypes.shape({
    base64: PropTypes.string,
    aspectRatio: PropTypes.number,
    src: PropTypes.string,
    srcSet: PropTypes.string,
    srcSetType: PropTypes.string,
    sizes: PropTypes.string,
    originalImg: PropTypes.string,
  }).isRequired,
  company: PropTypes.string,
  url: PropTypes.string,
};

Quote.defaultProps = {
  company: null,
  url: null,
};

export default Quote;
