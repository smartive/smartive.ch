import React from 'react';
import renderer from 'react-test-renderer';

import { NewsletterSignup } from './newsletter-signup';

describe('NewsletterSignup', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<NewsletterSignup />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
