import React from 'react';
import { connect } from 'react-redux';
import InputField from './InputField';
import Button from './Button';
import Loading from './Loading';
import styled from 'styled-components';
import { selectors as loginSel } from '../../background/reducers/login/loginReducer'
import { loading, submitLogin, cancelLogin } from '../../background/reducers/login/actions';

const Header = styled.h1`
  text-align:center;
  font-family: sans-serif;
`;

class Login extends React.Component {
  render() {
    const { loading, cancelLogin } = this.props;
    return (
      <div>
        <Header>Login</Header>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label htmlFor="username">Username: </label>
          <InputField
            type="text"
            name="username"
          />
          <label htmlFor="password">Password: </label>
          <InputField
            type="password"
            name="password"
          />
          <Button>Login</Button>
          { loading ?  <Loading onClick={cancelLogin} icon="spinner"/> : null}
        </form>
      </div>
    );
  }

  handleSubmit(e) {
    const { submitLogin } = this.props;
    submitLogin({
      username: e.target.username.value,
      password: e.target.password.value
    });
  }
}

const enhance = connect(
  state => ({
    username: loginSel.username(state),
    password: loginSel.password(state),
    loading: loginSel.loading(state),
    authenticated: loginSel.authenticated(state)
  }),
  {
    loading,
    submitLogin,
    cancelLogin
  }
)

export default enhance(Login);