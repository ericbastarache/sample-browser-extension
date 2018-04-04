export const CHANGE_COUNTRY = 'CHANGE_COUNTRY';
export const FETCH_COUNTRY_DATA = 'FETCH_COUNTRY_DATA';
export const key = 'countries'

export const fetchCountryData = () => {
  return {
    type: FETCH_COUNTRY_DATA
  }
}

export const changeCountry = (selectedCountry) => {
  return {
    type: CHANGE_COUNTRY,
    payload: selectedCountry
  }
}