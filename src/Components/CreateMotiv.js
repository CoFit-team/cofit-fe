import React from "react";
import { Card, Form, Button } from "semantic-ui-react";
import { uuid } from "uuidv4";
import axios from "../utils/axios";

class NewMotiv extends React.Component {
  constructor() {
    super();
    this.state = {
      imageURL: "",
      text: "",
      postMotivSuccess: false,
      image: [],
      uploading: false,
    };
  }

  onAddImage = (upload) => {
    const file = Array.from(upload.target.file);
    this.setState({ uploading: true });

    const formData = new FormData();

    formData.append(file);

    this.setState({
      images: file,
    });
  };

  onPostMotivSuccess = () => {
    this.setState({
      postMotivSuccess: true,
    });
  };

  PostMotiv = async (event) => {
    const payload = {
      motivId: uuid(),
      imageURL: this.state.imageURL,
      text: this.state.text,
    };
    const res = await axios.post("/motivs", payload);
    this.onPostMotivSuccess();
    return res;
  };

  render() {
    return (
      <Card centered>
        <Card.Content textAlign="center">
          <Form>
            <Form.Field>
              <Form.TextArea
                label="Create a new Motiv!"
                placeholder="How are you feeling today?"
              />
              <input type="file"/>
            </Form.Field>
            <Button type="submit" onClick={(event) => this.PostMotiv(event)}>
              Submit
            </Button>
            
            {this.state.postMotivSuccess === true && (
              <h5> Post Successful! </h5>
            )}
          </Form>
        </Card.Content>
      </Card>
    );
  }
}

export default NewMotiv;
