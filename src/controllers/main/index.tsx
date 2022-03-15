import { NextFunction, Request, Response } from 'express';
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
export const fetchData = (req: Request, res: Response, next: NextFunction) => {
  Service()
    .get.then((data: any) => {
      const results = data.data;
      store.dispatch(fetchInitialData(results));
      next();
    })
    .catch((err: Error) => {
      res.status(500).json({ message: err.message });
      next();
    });
};

/**
 * Render view
 */
export const render = (template: any) =>
  function render(req: Request, res: Response) {
    const Main = (props: any) => <MainPage {...props} />;

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
