import React from "react";
import { Container } from "semantic-ui-react";
import EmotionsForm from "../Components/EmotionsForm";
import RadarChart from "../Components/RadarChart";

class MotivDashboard extends React.Component {
  constructor() {
    super();
    this.state = { dashBoardState: "" };
  }
  mockUpdateState(value) {
    this.setState({ dashBoardState: value });
    console.log("updated");
  }

  render() {
    return (
      <Container>
        <EmotionsForm mockUpdate={this.mockUpdateState} />
        <RadarChart />
      </Container>
    );
  }
}

export default MotivDashboard;
