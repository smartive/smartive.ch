import React from 'react';
import PropTypes from 'prop-types';

import './member.scss';

export const Member = ({ name, job, image, education, children, links = [] }) =>
  (<div className="member col-xs-12 col-md-6 col-lg-4" itemScope itemProp="employee" itemType="http://schema.org/Person">
    <img className="member__portrait" src={image.src} alt={image.alt} />
    <div className="member__text">
      <h2>
        <small itemProp="jobTitle">{job}</small> <span itemProp="name">{name}</span>
      </h2>
      <h3>
        {education}
      </h3>
      {children}
      <p>
        {links.length > 0
          ? links.map((link) => {
            const linkItemProp = link.url.startsWith('mailto:') ? 'email' : 'sameAs';
            return (<a key={link.url} href={link.url} itemProp={linkItemProp}>
              {link.text}
            </a>);
          })
            .reduce((pre, cur) => [pre, ', ', cur])
          : null}
      </p>
    </div>
  </div>);

Member.propTypes = {
  name: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  education: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ),
};

Member.defaultProps = {
  links: [],
};

export default Member;
