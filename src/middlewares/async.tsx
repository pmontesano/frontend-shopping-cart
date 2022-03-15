export const asyncMiddleware =
  (store: any) => (next: Function) => (action: any) => {
    if (typeof action === 'function') {
      return action(store.dispatch, store.getState);
    }
    return next(action);
  };
