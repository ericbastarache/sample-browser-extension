import { createLogic } from 'redux-logic';
import { SUBMIT_LOGIN, CANCEL_LOGIN, cancelLogin, submitLogin } from '../../background/reducers/login/actions';

const loginLogic = createLogic({
  type: SUBMIT_LOGIN,
  cancelType: CANCEL_LOGIN,
  debounce: 3000,
  latest: true,
  validate({getState, action}, allow, reject) {
    if (action.username && action.password) {
      allow(action);
    } else {
      reject();
    }
  },
  process({getState, action}, dispatch, done) {
    axios.get('../../background/sampleData')
      .then(resp => {
        if(resp.account.username === action.username && resp.account.password === action.password) {
          dispatch(submitLogin({username: resp.account.username, password: resp.account.password}))
        } else {
          dispatch(cancelLogin());
        }
      })
      .then(() => dispatch(loadingUser()))
      .catch(err => {
        console.error('Username or password did not match')
        dispatch(cancelLogin());
      })
      .then(() => done());
  }
});

export default [
  loginLogic
];