import { combineReducers } from 'redux';
import {key as loginKey, loginReducer} from './login/loginReducer';
import {key as optionKey, optionsReducer} from './options/optionsReducer';
import {key as countryKey, countryReducer} from './country/countryReducer';

const rootReducer = combineReducers({
    [loginKey]: loginReducer,
    [optionKey]: optionsReducer,
    [countryKey]: countryReducer
});

export default rootReducer;
