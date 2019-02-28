import React from 'react';
import { shallow } from 'enzyme';

import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

describe('The App Component', () => {
  let component;
  
  beforeEach(() => {
    component = shallow(<App />);
  });
  
  afterEach(() => {
    component.unmount();
  });

  it('shows a comment box', () => {
    expect(component.find(CommentBox).length).toEqual(1);
  });

  it('shows a comment box', () => {
    expect(component.find(CommentList).length).toEqual(1);
  });
});