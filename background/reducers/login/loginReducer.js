import { UPDATE, SUBMIT_LOGIN, CANCEL_LOGIN, LOGOUT } from './actions';

export const selectors = {
  fields: state => state[key].fields,
  errors: state => state[key].errors,
  message: state => state[key].message
};

const { createStore } = window.Redux;
const {
  createActions,
  handleActions,
  handleAction
} = window.ReduxActions;

const { submit_login, cancel_login, logout } = createActions(SUBMIT_LOGIN, CANCEL_LOGIN, LOGOUT);

const INITIAL_STATE = {
  authenticated: false,
  fields: {
    username: '',
    password: ''
  }
};

const loginReducer = handleActions({
  update: (state, action) => {
    const fieldUpdate = action.payload.updatedField;
    const updatedFields = {
      ...state.fields,
      [fieldUpdate.name]: fieldUpdate.value
    };
    return {
      ...state,
      fields: updatedFields,
      errors: [],
      valid: true,
      message: ''
    }
  },
  submit_login: (state, action) => ({
      ...state,
      authenticated: true,
      fields: action.payload.updatedFields
  }),
  logout: (state) => ({
      ...state,
      authenticated: false,
      fields: {
        username: '',
        password: ''
      }
  }),
  cancel_login: (state) => ({
      ...state,
      authenticated: false,
      fields: {
        username: '',
        password: ''
      }
  })
}, INITIAL_STATE);

export default loginReducer;