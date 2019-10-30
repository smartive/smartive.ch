import React from 'react';
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';

import { Project } from './project';

const shallow = new ShallowRenderer();

describe('Project', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Project title="Title" category="Category" image={{ src: 'example.jpg', alt: 'Example' }}>
          <p>Content</p>
        </Project>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with a «Case» LinkButton', () => {
    const tree = shallow.render(
      <Project title="Title" category="Category" image={{ src: 'example.jpg', alt: 'Example' }} caseUrl="/case">
        <p>Content</p>
      </Project>
    );
    expect(tree).toMatchSnapshot();
  });
});
