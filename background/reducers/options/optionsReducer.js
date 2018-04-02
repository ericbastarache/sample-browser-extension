import { SELECT_OPTION, FETCH_OPTIONS } from './actions.js';

const { createStore } = window.Redux;
const {
  createActions,
  handleActions,
  handleAction
} = window.ReduxActions;

const { select_option, fetch_options } = createActions(SELECT_OPTION, FETCH_OPTIONS);

const INITIAL_STATE = {
  options: [],
  option: null
};

const optionsReducer = handleActions({
  fetch_options:(state, action) => ({
      ...state,
      options: action.payload.options
  }),
  select_option: (state, action) => ({
      ...state,
      option: action.payload.selectedOption
  })
}, INITIAL_STATE);

export default optionsReducer;