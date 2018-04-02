import React from 'react';
import { connect } from 'react-redux';
import InputField from './InputField';
import Button from './Button';
import styled from 'styled-components';

const Header = styled.h1`
  text-align:center;
  font-family: sans-serif;
`;

class Login extends React.Component {
  render() {
    return (
      <div>
        <Header>Login</Header>
        <form>
          <label htmlFor="username">Username: </label>
          <InputField
            type="text"
            name="username"
            value={this.props.username}
          />
          <label htmlFor="password">Password: </label>
          <InputField
            type="password"
            name="password"
            value={this.props.password}
          />
          <Button onClick={this.handleSubmit.bind(this)}>Login</Button>
        </form>
      </div>
    );
  }

  handleSubmit() {
    const { dispatch } = this.props;
    // change hard coded values
    dispatch({type: SUBMIT_LOGIN, payload: {username: 'user1', password: '123456'}});
  }
}

const mapStateToProps = state => {
  return {
    username: state.username,
    password: state.password
  }; 
};

export default connect(mapStateToProps)(Login);