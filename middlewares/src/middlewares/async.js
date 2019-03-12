export default ({ dispatch }) => (next) => (action) => {
  //Check to see if the action has a promise on the paylod
  //If it does wait for the promise to resolve
  //if it doesn't send to next middleware
  if(!action.payload || !action.payload.then) {
    return next(action);
  }

  action.payload.then((response) => {
    const newAction = { ...action, payload: response };
    dispatch(newAction);
  });
};

