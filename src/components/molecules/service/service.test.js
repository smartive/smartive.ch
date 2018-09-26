import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import { Service } from './service';

// This test uses the Shallow Renderer (only one JSX level deep) because the
// underlying gatsby-link relies on the router being passed in the context.
// Therefore this test doesn't test the link implementation.
const renderer = new ShallowRenderer();

describe('Service', () => {
  it('renders correctly', () => {
    const tree = renderer.render(
      <Service title="Title" image={{ src: 'example.jpg', alt: 'Example' }} catchline="Catchline">
        <p>Content</p>
      </Service>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with lead', () => {
    const tree = renderer.render(
      <Service title="Title" image={{ src: 'example.jpg', alt: 'Example' }} catchline="Catchline" lead="Longer Lead Text">
        <p>Content</p>
      </Service>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const tree = renderer.render(
      <Service
        title="Title"
        image={{ src: 'example.jpg', alt: 'Example' }}
        catchline="Catchline"
        linkedCase={{ url: '/case', title: 'Link to Case' }}
      >
        <p>Content</p>
      </Service>,
    );
    expect(tree).toMatchSnapshot();
  });
});
