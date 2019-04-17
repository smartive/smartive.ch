import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import { LinkWrapper } from './link-wrapper';

// This test uses the Shallow Renderer (only one JSX level deep) because the
// underlying gatsby-link relies on the router being passed in the context.
// Therefore this test doesn't test the link implementation.
const renderer = new ShallowRenderer();

describe('LinkWrapper', () => {
  it('renders default external link correctly', () => {
    const tree = renderer.render(<LinkWrapper to="http://example.com">TestLink</LinkWrapper>);
    expect(tree).toMatchSnapshot();
  });

  it('renders default internal link correctly', () => {
    const tree = renderer.render(<LinkWrapper to="/internal">TestLink</LinkWrapper>);
    expect(tree).toMatchSnapshot();
  });
});
