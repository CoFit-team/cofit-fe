import React from "react";
import { Card, Form, Button } from "semantic-ui-react";
import axios from "../utils/axios";

class NewMotiv extends React.Component {
  constructor() {
    super();
    this.state = {
      imageFile: "",
      text: "",
      postMotivSuccess: false,
      uploading: false,
    };
  }

  // onAddImage = (upload) => {
  //   const file = Array.from(upload.target.file);
  //   this.setState({ uploading: true });

  //   const formData = new FormData();

  //   formData.append(file);

  //   this.setState({
  //     images: file,
  //   });
  // };
  onChangeText = (event) => {
    this.setState({
      text: event.target.value,
    });
  };
  addImage = (event) => {
    this.setState({
      imageFile: event.target.files,
    });
    console.log(this.state.imageFile);
  };
  onPostMotivSuccess = () => {
    this.setState({
      postMotivSuccess: true,
    });
  };

  PostMotiv = async (event) => {
    const payload = {
      imageFile: this.state.imageFile,
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
                onChange={this.onChangeText}
                value={this.state.text}
              />
              {/* <input type="file" name="file" onChange={this.addImage} /> */}
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
