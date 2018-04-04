import * as reduxActions from 'redux-actions';
import { FETCH_OPTIONS } from './actions.js';

const { createStore } = reduxActions;
const {
  createActions,
  handleActions,
  handleAction
} = reduxActions;

export const selectors = {
  options: state => state.options,
  option: state => state.option
}

const { fetch_options } = createActions(FETCH_OPTIONS);

const INITIAL_STATE = {
  options: [],
  option: null
};

const optionsReducer = handleActions({
  fetch_options:(state, action) => ({
      ...state,
      options: action.payload.options
  })
}, INITIAL_STATE);

export default optionsReducer;