import React from "react";
import {
  Card,
  Form,
  Header,
  Label,
  Divider,
  Button,
  Grid,
} from "semantic-ui-react";
import axios from "../utils/axios";

class EmotionsForm extends React.Component {
  constructor() {
    super();
    this.state = {
      emotionValue: 0,
    };
  }

  handleButtonClick = (e, content) => {
    this.setState({
      emotionValue: content,
    });
  };

  submitEmotions = async () => {
    const reply = await axios.get("/users").catch((err) => {
      console.log("User not found.");
    });
    if (!!reply) {
      const data = reply.data;
      const userId = data.userId;
      await axios
        .patch(`/users/${userId}/emotions`, this.state)
        .catch((err) => {
          console.log("Your emotions are invalid");
        });
    }
    // const date = new Date();
    // this.props.mockUpdate(date.toISOString());
  };

  render() {
    return (
      <Card centered>
        <Header textAlign="center" as="h4">
          How are you feeling today?
        </Header>
        <Grid centered>
          <Form.Field>
            <Label.Group fluid={true}>
              <Label onClick={(e) => this.handleButtonClick(e, 4)}>
                <span role="img" aria-label="emoji">
                  😍
                </span>
              </Label>
              <Label onClick={(e) => this.handleButtonClick(e, 3)}>
                <span role="img" aria-label="emoji">
                  😁
                </span>
              </Label>
              <Label onClick={(e) => this.handleButtonClick(e, 2)}>
                <span role="img" aria-label="emoji">
                  😐
                </span>
              </Label>
              <Label onClick={(e) => this.handleButtonClick(e, 1)}>
                <span role="img" aria-label="emoji">
                  🙁
                </span>
              </Label>
              <Label onClick={(e) => this.handleButtonClick(e, 0)}>
                <span role="img" aria-label="emoji">
                  😣
                </span>
              </Label>
            </Label.Group>
          </Form.Field>
        </Grid>
        <Divider hidden></Divider>
        <Button onClick={this.submitEmotions}>Submit</Button>
        <Header textAlign="center" as="h5">
          I'm feeling like a {this.state.emotionValue} today
        </Header>
      </Card>
    );
  }
}

export default EmotionsForm;
