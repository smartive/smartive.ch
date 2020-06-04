import React from 'react';
import renderer from 'react-test-renderer';

import { ContactForm } from './contact-form';

describe('ContactForm', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ContactForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
