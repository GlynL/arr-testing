export default store => next => action => {
  // check to see if action has a promise on 'payload' property
  // if not, send to next middleware
  if (!action.payload || !action.payload.then) {
    return next(action);
  }
  // if it does, wait for it to resolve
  action.payload.then(response => {
    const newAction = {
      ...action,
      payload: response
    };
    store.dispatch(newAction);
  });
};
