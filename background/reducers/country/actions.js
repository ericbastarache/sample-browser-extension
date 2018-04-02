import sampleData from '../../sampleData.js';
export const CHANGE_COUNTRY = 'CHANGE_COUNTRY';
export const FETCH_COUNTRY_DATA = 'FETCH_COUNTRY_DATA';
export const countryKey = 'countries'

export const fetchCountryData = (countryData) => {
  return {
    type: FETCH_COUNTRY_DATA,
    payload: countryData
  }
}

export const changeCountry = (selectedCountry) => {
  return {
    type: CHANGE_COUNTRY,
    payload: selectedCountry
  }
}