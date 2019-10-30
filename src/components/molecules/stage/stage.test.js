import React from 'react';
import renderer from 'react-test-renderer';

import { Stage } from './stage';

describe('Stage', () => {
  it('renders correctly without content', () => {
    const tree = renderer.create(<Stage image={{ src: 'example.jpg', alt: 'Example' }} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with title and text', () => {
    const tree = renderer
      .create(
        <Stage image={{ src: 'example.jpg', alt: 'Example' }} title={<h1>Hello World!</h1>}>
          <p>Content</p>
        </Stage>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with title, text and a list of modifiers', () => {
    const tree = renderer
      .create(
        <Stage modifiers={['foo', 'bar']} image={{ src: 'example.jpg', alt: 'Example' }} title={<h1>Hello World!</h1>}>
          <p>Content</p>
        </Stage>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with multiple children', () => {
    const tree = renderer
      .create(
        <Stage image={{ src: 'example.jpg', alt: 'Example' }}>
          <p>Content 1</p>
          <p>Content 2</p>
          <p>Content 3</p>
        </Stage>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
