import React from 'react';
import renderer from 'react-test-renderer';

import { BlogTeaser } from './blog-teaser';

describe('Blog Teaser', () => {
  it('renders default correctly', () => {
    const tree = renderer
      .create(<BlogTeaser url="http://example.com" title="Title" subline="Subline" lead="Longer lead text" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders default correctly with an img', () => {
    const tree = renderer
      .create(
        <BlogTeaser url="http://example.com" title="Title" subline="Subline" lead="Longer lead text" img="image.jpg" />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
