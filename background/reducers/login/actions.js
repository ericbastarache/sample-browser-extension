import sampleData from '../../sampleData.js';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const CANCEL_LOGIN = 'CANCEL_LOGIN';
export const LOGOUT = 'LOGOUT';
export const UPDATE = 'UPDATE';
export const LOADING_USER = 'LOADING_USER';
export const loginKey = 'login';

export const submitLogin = (data) => {
  return {
    type: SUBMIT_LOGIN,
    payload: data
  }
}

export const cancelLogin = () => {
  return {
    type: CANCEL_LOGIN
  }
}

export const update = (updatedField) => {
  return {
    type: UPDATE,
    payload: updatedField
  }
}

export const loadingUser = () => {
  return {
    type: LOADING_USER
  }
}