import React from 'react';
import renderer from 'react-test-renderer';

import { Teaser } from './teaser';

describe('Teaser', () => {
  it('renders correctly without content', () => {
    const tree = renderer.create(<Teaser title="Title" subline="Subline" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with content', () => {
    const tree = renderer
      .create(
        <Teaser title="Title" subline="Subline">
          <p>Content</p>
        </Teaser>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
