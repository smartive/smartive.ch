import React from 'react';
import renderer from 'react-test-renderer';

import { NewsletterBlock } from './newsletter-block';

describe('Newsletter Block', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<NewsletterBlock />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
