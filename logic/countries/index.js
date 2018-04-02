import { createLogic } from 'redux-logic';
import { FETCH_COUNTRY_DATA } from '../../background/reducers/country/actions';

const fetchCountriesLogic = createLogic({
  type: FETCH_COUNTRY_DATA,
  latest: true,
  process({getState, action}, dispatch, done) {
    axios.get('../../background/sampleData.js')
      .then(resp => resp)
      .then(countries => dispatch({type: FETCH_COUNTRY_DATA, payload: countries}))
      .catch(err => {
        console.error(err)
      })
      .then(() => done());
  }
});

export default [
  fetchCountriesLogic
];