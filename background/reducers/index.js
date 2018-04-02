import { combineReducers } from 'redux';
import loginReducer from './login/loginReducer';
import optionsReducer from './options/optionsReducer';
import countryReducer from './country/countryReducer';

const rootReducer = combineReducers({
    loginReducer,
    optionsReducer,
    countryReducer
});

export default rootReducer;
