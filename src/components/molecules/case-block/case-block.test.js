import React from 'react';
import renderer from 'react-test-renderer';

import { CaseBlock } from './case-block';

describe('Case Block', () => {
  it('renders correctly with a graphic image', () => {
    const tree = renderer
      .create(
        <CaseBlock title="Title" subtitle="Subtitle" graphic={<img src="example.jpg" alt="Example" />}>
          <p>Example Case Block Text</p>
        </CaseBlock>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly without a graphic image', () => {
    const tree = renderer
      .create(
        <CaseBlock title="Title" subtitle="Subtitle">
          <p>Example Content</p>
        </CaseBlock>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
