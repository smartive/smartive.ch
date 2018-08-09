import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import { Button } from './button';

// This test uses the Shallow Renderer (only one JSX level deep) because the
// underlying gatsby-link relies on the router being passed in the context.
// Therefore this test doesn't test the link implementation.
const renderer = new ShallowRenderer();

describe('Button', () => {
  it('renders default external link correctly', () => {
    const tree = renderer.render(<Button url="http://example.com" text="Button" />);
    expect(tree).toMatchSnapshot();
  });

  it('renders default internal link correctly', () => {
    const tree = renderer.render(<Button url="/internal" text="Button" />);
    expect(tree).toMatchSnapshot();
  });

  it('renders primary correctly', () => {
    const tree = renderer.render(<Button url="http://example.com" text="Primary" isPrimary />);
    expect(tree).toMatchSnapshot();
  });

  it('renders white with border correctly', () => {
    const tree = renderer.render(<Button url="http://example.com" text="White w/ Border" isWhite hasBorder />);
    expect(tree).toMatchSnapshot();
  });
});
