import React from 'react';
import { mount } from 'enzyme';

import CommentBox from 'components/CommentBox';
import Root from 'Root';

describe('The Comment Box Component', () => {
  let component;

  beforeEach(() => {
    component = mount(
    <Root>
      <CommentBox />
    </Root>  
    );
  });

  afterEach(() => {
    component.unmount();
  });

  it('shows a textarea and button', () => {
    expect(component.find('textarea').length).toEqual(1);
    expect(component.find('button').length).toEqual(1);
  });

  describe('the text area', () => {
    beforeEach(() => {
      component.find('textarea').simulate('change', {
        target: { value: 'new comment' }
      });
      component.update();
    });
    
    it('has a textarea that user can type in', () => {
      expect(component.find('textarea').prop('value')).toEqual('new comment');
    });

    it('when the form is submitted the text area gets emptied', () => {
      component.find('form').simulate('submit');
      expect(component.find('textarea').prop('value')).toEqual('');
    });
  });

});