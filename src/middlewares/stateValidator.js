import tv4 from "tv4";
import stateSchema from "middlewares/stateSchema";

// async middleware will await result & dispatch new action with data.
// new data will be checked by this function (first data too - if defined first in applyMiddleware)
// calls next(action) but doesn't return, next code executes a console.warn if invalid

export default store => next => action => {
  next(action);
  if (!tv4.validate(store.getState(), stateSchema)) {
    console.warn("invalid state schema detected");
  }
};
