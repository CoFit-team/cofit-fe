import React from "react";
import { Container, Header, Segment, Grid, Card } from "semantic-ui-react";
import MotivCard from "../Components/MotivCard";
import axios from "../utils/axios";

class MotivGallery extends React.Component {
  constructor() {
    super();
    this.state = {
      errorMessage: "",
      motivCardsData: [],
      sideBarState: false,
    };
  }

  componentDidMount() {
    this.getAllMotivs();
  }

  getAllMotivs = async () => {
    try {
      const allMotivs = await axios.get("/motivs");
      const { data } = await allMotivs;
      const state = this.state;
      state.motivCardsData = data.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      this.setState(state);
    } catch (error) {
      this.setState({
        errorMessage: error.message,
      });
    }
  };

  addLikes = async (motivId, likes) => {
    const reply = await axios.get("/users").catch((err) => {
      console.log("User not found.");
    });
    if (!!reply) {
      const data = reply.data;
      const payload = {
        userId: data.userId,
        likes: likes + 1,
      };
      console.log("Logged In");
      await axios.patch(`/motivs/${motivId}/likes`, payload).catch((err) => {
        console.log("No Likes from you");
      });
      this.getAllMotivs();
    }
  };

  render() {
    return (
      <div aria-label="motiv-gallery">
        <Header as="h1" textAlign="center">
          Motiv Gallery
        </Header>
        <Container>
          <Grid centered>
            <Card.Group itemsPerRow="3">
              {this.state.motivCardsData.length > 0 ? (
                this.state.motivCardsData.map((motiv) => (
                  <MotivCard motiv={motiv} addLikes={this.addLikes} />
                ))
              ) : (
                <span />
              )}
            </Card.Group>
          </Grid>
        </Container>
        <Segment inverted color="black" textAlign="center" as="h5">
          Created by Co-fit
        </Segment>
      </div>
    );
  }
}

export default MotivGallery;
