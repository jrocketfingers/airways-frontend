import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  border: none;
  padding: 10px;
  display: block;

  &:focus {
    outline: none;
  }
`;

export default class LoginPage extends React.Component {
  login(e) {
    fetch('http://localhost:8000/api/login/',
      {
        body: '{"username": "admin", "password": "qwer1234"}',
        method: 'post',
        headers: {
          'Content-type': 'application/json'
        }
      }).then((response) => {
        console.log(response);
        store.dispatch(LOGIN);
        return false;
      });

    e.preventDefault();
  }

  componentWillMount() {
  }

  render() {
    return (
      <main>
        <form onSubmit={this.login}>
          <Input type="text" placeholder="username" />
          <Input type="password" placeholder="password" />
          <button type="submit">submit</button>
        </form>
      </main>
    );
  }
}
