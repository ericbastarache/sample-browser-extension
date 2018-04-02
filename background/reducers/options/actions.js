import sampleData from '../../sampleData.js';
export const FETCH_OPTIONS = 'FETCH_OPTIONS';
export const SELECT_OPTION = 'SELECT_OPTION';
export const optionsKey = 'options';

export const fetchOptions = (options) => {
  return {
    type: FETCH_OPTIONS,
    payload: options
  }
}

export const selectOption = (selectedOption) => {
  return {
    type: SELECT_OPTION,
    payload: selectedOption
  }
}