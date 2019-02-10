import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import { CaseTeaser } from './case-teaser';

// This test uses the Shallow Renderer (only one JSX level deep) because the
// underlying gatsby-link relies on the router being passed in the context.
// Therefore this test doesn't test the link implementation.
const renderer = new ShallowRenderer();

describe('Caes Teaser', () => {
  it('renders correctly', () => {
    const tree = renderer.render(
      <CaseTeaser url="http://example.com" image={{ src: 'example.jpg', alt: 'Example' }} title="Title" subline="Subline">
        <p>Example Content</p>
      </CaseTeaser>,
    );

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with «All Projects» LinkButton', () => {
    const tree = renderer.render(
      <CaseTeaser
        url="http://example.com"
        image={{ src: 'example.jpg', alt: 'Example' }}
        title="Title"
        subline="Subline"
        allProjects
      >
        <p>Example Content</p>
      </CaseTeaser>,
    );
    expect(tree).toMatchSnapshot();
  });
});
