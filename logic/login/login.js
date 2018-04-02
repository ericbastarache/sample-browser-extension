import { createLogic } from 'redux-logic';
import { cancelLogin } from '../../background/reducers/actions';

const loginLogic = createLogic({
  type: SUBMIT_LOGIN,
  debounce: 3000,
  latest: true,
  validate({getState, action}, allow, reject) {
    if (action.payload && action.payload.username && action.payload.password) {
      allow(action);
    } else {
      reject();
    }
  },
  process({getState, action}, dispatch, done) {
    axios.get('../../background/sampleData')
      .then(resp => dispatch(submitLogin(resp.account)))
      .then(() => dispatch(loadingUser()))
      .catch(err => {
        console.error('Username or password did not match')
        dispatch(cancelLogin);
      })
      .then(() => done());
  }
});

export default [
  loginLogic
];