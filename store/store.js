import {createStore} from "redux";
import {reducer} from './reducer';

export const makeStore = (initialState, options) => {
  return createStore(reducer, initialState);
};