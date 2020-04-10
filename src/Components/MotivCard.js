import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import "./MotivCard.css";

const MotivCard = () => (
  <div>
    <Card textAlign="center">
      <Image src="https://goqii.com/blog/wp-content/uploads/7-Positive-Habits-To-Have-An-Incredible-Day-1024x686.jpg" />
      <Card.Header textAlign="center">Today's great</Card.Header>
      <Card.Content>
        <Card.Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          congue tincidunt arcu, sit amet feugiat neque mollis non. Nulla porta
          eros ex,dictum tempor diam tincidunt a. Mauris sit amet est ut magna
          hendrerit efficitur eu nec augue. Morbi a odio tincidunt, porta diam.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Icon name="like" />
        <p>15 likes</p>
        <Card.Meta textAlign="right">Positivity</Card.Meta>
      </Card.Content>
    </Card>
  </div>
);

export default MotivCard;
