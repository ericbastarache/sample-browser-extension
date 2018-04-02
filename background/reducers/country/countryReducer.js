import { countryKey, FETCH_COUNTRY_DATA, CHANGE_COUNTRY } from './actions.js';

const { createStore } = window.Redux;
const {
  createActions,
  handleActions,
  handleAction
} = window.ReduxActions;

const { fetch_country_data, change_country } = createActions(FETCH_COUNTRY_DATA, CHANGE_COUNTRY);

export const selectors = {
  countries: state => state[countryKey].countries,
  country: state => state[countryKey].country
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