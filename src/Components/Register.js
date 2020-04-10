import React from "react";
import axios from "../utils/axios";
import { uuid } from "uuidv4";
import { Card, Header, Form, Button, Checkbox } from "semantic-ui-react";

class RegisterUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      username: "",
      password: "",
      email: "",
      registerSuccess: false,
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

  onChangeEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  onRegisterSuccess = () => {
    this.setState({
      registerSuccess: true,
    });
  };
  RegisterUser = async (event) => {
    const details = {
      userId: uuid(),
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
    };

    const res = await axios.post("/users/newuser", details);
    return res;
  };

  render() {
    return (
      <Card centered>
        <Card.Content textAlign="center">
          <Form>
            <Header as="h1">Register</Header>
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
              />
            </Form.Field>
            <Form.Field>
              <label>Email</label>
              <input
                type="text"
                placeholder="first name"
                onChange={this.onChangeEmail}
              />
            </Form.Field>
            <Form.Field>
              <Checkbox label="I agree to the Terms and Conditions" />
            </Form.Field>
            <Button type="submit" onClick={(event) => this.RegisterUser(event)}>
              Submit
            </Button>
            {this.state.loginSuccess === true && (
              <h5> Register Successful! </h5>
            )}
          </Form>
        </Card.Content>
      </Card>
    );
  }
}
export default RegisterUser;
