import { createLogic } from 'redux-logic';
import { FETCH_OPTIONS } from '../../background/reducers/options/actions';

const fetchOptionsLogic = createLogic({
  type: FETCH_OPTIONS,
  latest: true,
  process({getState, action}, dispatch, done) {
    axios.get('../../background/sampleData')
      .then(resp => resp.options)
      .then(resp => resp.options)
      .then(options => dispatch({type: FETCH_OPTIONS, payload: options}))
      .catch(err => {
        console.error(err)
      })
      .then(() => done());
  }
});

export default [
  fetchOptionsLogic
];