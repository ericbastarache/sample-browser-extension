import * as reduxActions from 'redux-actions';
import { key, FETCH_COUNTRY_DATA, CHANGE_COUNTRY } from './actions.js';

const { createStore } = reduxActions;
const {
  createActions,
  handleActions,
  handleAction
} = reduxActions;

const { fetch_country_data, change_country } = createActions(FETCH_COUNTRY_DATA, CHANGE_COUNTRY);

export const selectors = {
  countries: state => state.countries,
  country: state => state.country
};

const INITIAL_STATE = {
  countries: [],
  country: null
};

const countryReducer = handleActions({
  fetch_country_data: (state, action) => ({
    ...state,
    countries: action.payload.countryData
  }),
  change_country: (state, action) => ({
      ...state,
      country: action.payload.selectCountry
  })
}, INITIAL_STATE);

export default countryReducer;