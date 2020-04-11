import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import "./MotivCard.css";
import axios from "../utils/axios";

class MotivCard extends React.Component {
  render() {
    const { text, likes, motivId } = this.props.motiv;
    return (
      <Card.Header>
        <Card>
          <Image src="https://goqii.com/blog/wp-content/uploads/7-Positive-Habits-To-Have-An-Incredible-Day-1024x686.jpg" />
          <Card.Header as="h3" textAlign="center">
            {text}
          </Card.Header>
          <Card.Content extra>
            <Icon name="like" circular onClick={this.props.addLikes(motivId)} />
            <p>{likes} likes</p>
            <Card.Meta textAlign="right">Positivity</Card.Meta>
          </Card.Content>
        </Card>
      </Card.Header>
    );
  }
}

export default MotivCard;
