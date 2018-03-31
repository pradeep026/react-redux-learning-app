import React from 'react';
import 'babel-polyfill';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import createStore from './store/createStore';
import { loadCourses } from './actions/courseActions';
import routes from './routes';
import './styles/app.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const RootElement = document.getElementById('root');

const store = createStore();
store.dispatch(loadCourses());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  RootElement
);
