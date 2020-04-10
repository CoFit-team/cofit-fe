import React from "react";
import { Container, Grid, Header, Segment, Divider } from "semantic-ui-react";
import MotivCard from "../Components/MotivCard";

class MotivGallery extends React.Component {
  constructor() {
    super();
    this.state = {
      errorMessage: "",
      motivCardsData: [],
      sideBarState: false,
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

  // SidebarExampleSidebar = () => {
  //   const [visible, setVisible] = useBooleanKnob({ name: "visible" });
  // };

  render() {
    return (
      <div aria-label="motiv-gallery">
        <Header as="h1" textAlign="center">
          Motiv Gallery
        </Header>

        <Container>
          <Grid>
            <Grid.Row centered columns={5}>
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
              <Grid.Column>
                <MotivCard />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Divider></Divider>
          <Grid></Grid>
        </Container>
        <Segment inverted color="black" textAlign="center" as="h5">
          Created by Co-fit
        </Segment>
      </div>
    );
  }
}

export default MotivGallery;
