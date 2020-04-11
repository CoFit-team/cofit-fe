import React from "react";
import { Container, Header, Segment, Grid } from "semantic-ui-react";
import MotivCard from "../Components/MotivCard";
import axios from "../utils/axios";

class MotivGallery extends React.Component {
  constructor() {
    super();
    this.state = {
      errorMessage: "",
      motivCardsData: [],
      sideBarState: false,
      // loginStatus: false,
    };
  }

  componentDidMount() {
    this.getAllMotivs();
    // this.checkUserLogin();
  }

  getAllMotivs = async () => {
    try {
      const allMotivs = await axios.get("/motivs");
      const { data } = await allMotivs;
      console.log(data);
      const state = this.state;
      state.motivCardsData = data;
      this.setState(state);
    } catch (error) {
      this.setState({
        errorMessage: error.message,
      });
    }
  };

  checkUserLogin() {
    axios
      .get("/users")
      .then((res) => {
        this.setState({
          loginStatus: true,
        });
      })
      .catch((err) => {
        console.log("User not logged in");
      });
  }

  addLikes = async () => {
    if (!this.state.loginStatus) {
      console.log("Please log in first");
    }
    console.log("add some likes");
    // const { userId } = await this.checkUserLogin();
    const motivId = this.props.motivId;
    //PATCH /motivs/:motivId/likes
    await axios.patch(`/motivs/${motivId}/likes`);
  };

  render() {
    return (
      <div aria-label="motiv-gallery">
        <Header as="h1" textAlign="center">
          Motiv Gallery
        </Header>
        <Container>
          <Grid centered>
            {this.state.motivCardsData.length > 0 ? (
              this.state.motivCardsData.map((motiv) => (
                <MotivCard motiv={motiv} addLikes={this.addLikes} />
              ))
            ) : (
              <span></span>
            )}
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
