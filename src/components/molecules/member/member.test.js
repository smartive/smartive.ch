import React from 'react';
import renderer from 'react-test-renderer';

import { Member } from './member';

describe('Member', () => {
  it('renders without links', () => {
    const tree = renderer
      .create(
        <Member
          name="Foo Bar"
          job="Bazzer"
          image={{
            src: 'image.jpg',
            alt: 'Example',
          }}
          education="Funny dude"
        >
          <p>Content</p>
        </Member>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with links', () => {
    const tree = renderer
      .create(
        <Member
          name="Foo Bar"
          job="Bazzer"
          image={{
            src: 'image.jpg',
            alt: 'Example',
          }}
          education="Funny dude"
          links={[{ url: '/foo', text: 'Foo' }, { url: '/bar', text: 'Bar' }]}
        >
          <p>Content</p>
        </Member>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
