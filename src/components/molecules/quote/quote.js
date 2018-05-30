import React from 'react';
import PropTypes from 'prop-types';

import './quote.scss';

export const Quote = ({ text, author, img, company, url }) => (
  <div className="container">
    <div className="quote-block">
      <div className="row">
        <div className="col-xs-12 col-md-3">
          <img
            className="quote__img"
            alt={`Portrait von ${author}`}
            src={img}
          />
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
  img: PropTypes.string.isRequired,
  company: PropTypes.string,
  url: PropTypes.string,
};

Quote.defaultProps = {
  company: null,
  url: null,
};

export default Quote;
