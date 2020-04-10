import React from "react";
import axios from "../utils/axios";
import { Header, Card, Form, Button } from "semantic-ui-react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loginSuccess: false,
    };
  }
  onChangeUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  onChangePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  onLoginSuccess = () => {
    this.setState({
      loginSuccess: true,
    });
  };
  PostLogin = async (event) => {
    const payload = {
      username: this.state.username,
      password: this.state.password,
    };
    const res = await axios.post("/users/login", payload);
    this.onLoginSuccess();
    return res;
  };

  render() {
    return (
      <Card centered>
        <Card.Content textAlign="center">
          <Form>
            <Header as="h1">Login</Header>
            <Form.Field>
              <label>Username</label>
              <input
                aria-label="username"
                type="text"
                placeholder="username"
                onChange={this.onChangeUsername}
              />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input
                aria-label="password"
                type="password"
                placeholder="password"
                onChange={this.onChangePassword}
              />{" "}
            </Form.Field>
            <Button type="submit" onClick={(event) => this.PostLogin(event)}>
              Submit
            </Button>
            {this.state.loginSuccess === true && <h5> Login Successful! </h5>}
          </Form>
        </Card.Content>
      </Card>
    );
  }
}

export default Login;
