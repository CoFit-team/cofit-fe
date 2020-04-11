import React from "react";
import { Card, Form, Checkbox, Header, Button } from "semantic-ui-react";
import axios from "../utils/axios";

class EmotionsForm extends React.Component {
  constructor() {
    super();
    this.state = {
      emotions: 0,
    };
  }

  updateEmotionsState(number) {
    this.setState({
      emotions: number,
    });
  }

  submitEmotions = async () => {
    const res = await axios.patch("/userId", this.state.emotions);
    return res;
  };

  render() {
    return (
      <div>
        <Card>
          <Form>
            <Header as="h4">How are you feeling today?</Header>
            <Form.Field>
              <Checkbox onChange={this.updateEmotionsState(5)} label="😍" />
              <Checkbox onChange={this.updateEmotionsState(4)} label="😁" />
              <Checkbox onChange={this.updateEmotionsState(3)} label="😐" />
              <Checkbox onChange={this.updateEmotionsState(2)} label="🙁" />
              <Checkbox onChange={this.updateEmotionsState(1)} label="😣" />
            </Form.Field>
            <Button onClick={this.submitEmotions}>Submit</Button>
          </Form>
        </Card>
      </div>
    );
  }
}

export default EmotionsForm;
