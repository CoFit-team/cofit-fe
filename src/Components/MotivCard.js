import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import "./MotivCard.css";

class MotivCard extends React.Component {
  render() {
    const randomNumber = Math.floor(100 * Math.random());
    const { text, likes, motivId } = this.props.motiv;

    return (
      <Card raised>
        <Image src={`https://picsum.photos/id/${randomNumber}/400/400`} />
        {/* <Image
          src={img}
        /> */}
        <Card.Header as="h3" textAlign="center">
          {text}
        </Card.Header>
        <Card.Content extra>
          <Icon
            name="like"
            circular
            onClick={() => this.props.addLikes(motivId, likes)}
          />
          <p>{likes} likes</p>
          <Card.Meta textAlign="right">Positivity</Card.Meta>
        </Card.Content>
      </Card>
    );
  }
}

export default MotivCard;
