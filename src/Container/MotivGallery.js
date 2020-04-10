import React from "react";
import {
  Container,
  Grid,
  Header,
  Segment,
  Divider,
  Image,
} from "semantic-ui-react";
import MotivCard from "../Components/MotivCard";
class MotivGallery extends React.Component {
  constructor() {
    super();
    this.state = {
      errorMessage: "",
      motivCardsData: [],
    };
  }

  // componentDidMount() {
  //   this.getAllMotivs();
  // }

  // getAllMotivs = async () => {
  //   try {
  //     const allMotivs = await axios.get("/");
  //     const { data } = await allMotivs;
  //   } catch(error) {
  //     this.setState({
  //       errorMessage: error.message
  //     });
  //   }
  // }

  render() {
    return (
      <div aria-label="motiv-gallery">
        <Segment inverted color="black">
          <Image src="../../public/logo.png"></Image>
          <Header as="h1" textAlign="center">
            Motiv Gallery
          </Header>
        </Segment>

        <Container>
          <Grid centered="true" padded="true">
            <Grid.Row columns={4}>
              <Grid.Column>
                <MotivCard />
              </Grid.Column>
              <Grid.Column>
                <MotivCard />
              </Grid.Column>
              <Grid.Column>
                <MotivCard />
              </Grid.Column>
              <Grid.Column>
                <MotivCard />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Divider></Divider>
          <Grid>
            <MotivCard />
            <MotivCard />
            <MotivCard />
          </Grid>{" "}
        </Container>
        <Segment inverted color="black" textAlign="center" as="h5">
          Created by Co-fit
        </Segment>
      </div>
    );
  }
}

export default MotivGallery;
