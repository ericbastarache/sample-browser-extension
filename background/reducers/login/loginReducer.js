import * as reduxActions from 'redux-actions';
import { key, UPDATE, SUBMIT_LOGIN, CANCEL_LOGIN, LOGOUT } from './actions';

const { createStore } = reduxActions;
const {
  createActions,
  handleActions,
  handleAction
} = reduxActions;

const { submit_login, cancel_login, logout } = createActions(SUBMIT_LOGIN, CANCEL_LOGIN, LOGOUT);

export const selectors = {
  username: state => state.username ,
  password: state => state.password,
  authenticated: state => state.authenticated,
  loading: state => state.loading
}

const INITIAL_STATE = {
  authenticated: false,
  username: '',
  password: '',
  loading: false
};

const loginReducer = handleActions({
  submit_login: (state, action) => ({
      ...state,
      authenticated: true,
      username: action.username,
      password: action.password,
      loading: true
  }),
  logout: (state) => ({
      ...state,
      authenticated: false,
      username: '',
      password: '',
      loading: false
  }),
  cancel_login: (state) => ({
      ...state,
      authenticated: false,
      username: '',
      password: '',
      loading: false
  })
}, INITIAL_STATE);

export default loginReducer;