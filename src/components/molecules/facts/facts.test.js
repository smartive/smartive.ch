import React from 'react';
import renderer from 'react-test-renderer';

import { Facts } from './facts';

describe('Facts', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Facts title="Title">
          <p>Content</p>
        </Facts>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
