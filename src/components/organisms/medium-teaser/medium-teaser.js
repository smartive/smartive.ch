import React from 'react';
import PropTypes from 'prop-types';

import { BlogTeaser } from '../../molecules';

export const MediumTeaser = ({ posts }) => (
  <div className="blog-list">
    <div className="container">
      <div className="row">
        {posts.edges.map(({ node }, index) => {
          const backgroundImage = node.virtuals.previewImage.imageId
            ? `https://cdn-images-1.medium.com/max/1200/${node.virtuals.previewImage.imageId}`
            : '';

          return (
            <BlogTeaser
              url={`https://blog.smartive.ch/${node.uniqueSlug}`}
              subline={node.author.name}
              title={node.title}
              lead={node.virtuals.subtitle}
              img={index === 0 ? backgroundImage : null}
              key={node.id}
            />
          );
        })}
      </div>
    </div>
  </div>
);

MediumTeaser.propTypes = {
  posts: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default MediumTeaser;
