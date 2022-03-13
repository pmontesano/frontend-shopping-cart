import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReactDOMServer from 'react-dom/server';
import Service from '../../server/services';
import reducer from '../../reducers';
import { asyncMiddleware } from '../../middlewares/async';
import { fetchInitialData } from '../../actions';
import MainPage from '../../index';

const initReducer = reducer;
const store = createStore(initReducer, applyMiddleware(asyncMiddleware));

/**
 * Fetch Site data
 */
exports.fetchData = (req, res, next) => {
  Service()
    .get.then((data) => {
      const results = data.data;
      store.dispatch(fetchInitialData(results));
      res.data = results;
      next();
    })
    .catch((err) => {
      next(new Error(err));
    });
};

/**
 * Render view
 */
exports.render = (template) =>
  function render(req, res) {
    const Main = (props) => <MainPage {...props} />;

    const state = store.getState();
    const { fetchData } = state;

    const initialState = fetchData;

    const component = ReactDOMServer.renderToString(
      <Provider store={store}>
        <Main {...initialState} />
      </Provider>
    );

    /**
     * Render View
     */
    res.send(template(component, initialState));
  };
