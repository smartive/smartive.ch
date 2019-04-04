import React from 'react';
import renderer from 'react-test-renderer';

import { Button } from './button';

describe('Button', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Button text="Button" onClick={() => {}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
