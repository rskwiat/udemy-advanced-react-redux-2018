import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

describe('The comments reducer', () => {
  it('handles actions of type SAVE_COMMENT', () => {
    const action = {
      type: SAVE_COMMENT,
      payload: 'New Comment'
    };
  
    const newState = commentsReducer([], action);
  
    expect(newState).toEqual(['New Comment']);
  });

  it('handles an action with an unkown type', () => {
    const action = {};
    const newState = commentsReducer([], action);
    expect(newState).toEqual([]);
  });
});

