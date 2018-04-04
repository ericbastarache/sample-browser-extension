import { createLogic } from 'redux-logic';
import { FETCH_OPTIONS } from '../../background/reducers/options/actions';
import sampleData from '../../background/sampleData.json';

console.log('sampleData', sampleData);

const fetchOptionsLogic = createLogic({
  type: FETCH_OPTIONS,
  latest: true,
  process({getState, action}, dispatch, done) {
    dispatch(fetchOptions(sampleData.options))
  }
});

export default [
  fetchOptionsLogic
];