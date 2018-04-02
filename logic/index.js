// import loginLogic from './login/index';
import fetchCountriesLogic from './countries/index';
import fetchOptionsLogic from './options/index';

export default [
  ...fetchOptionsLogic,
  ...fetchCountriesLogic
];