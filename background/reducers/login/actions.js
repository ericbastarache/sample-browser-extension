export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const CANCEL_LOGIN = 'CANCEL_LOGIN';
export const LOGOUT = 'LOGOUT';
export const UPDATE = 'UPDATE';
export const LOADING_USER = 'LOADING_USER';
export const key = 'login';

export const submitLogin = ({username, password}) => {
  return {
    type: SUBMIT_LOGIN,
    username,
    password
  }
}

export const logout = () => {
  return {
    type: LOGOUT
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