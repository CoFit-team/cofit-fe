import React from "react";
import { Container } from "semantic-ui-react";
import { Radar } from "chart.js";
//import RadarChart from "../Components/RadarChart";
// import EmotionsForm from "../Components/EmotionsForm";
//import axios from "../utils/axios"

class MotivDashboard extends React.Component {
  constructor() {
    super();
    this.state = { dashBoardState: "" };
    this.data = {
      labels: ["😍", "😁", "😐", "🙁", "😣"],
      datasets: [{ data: [40, 17, 22, 32, 47] }],
    };

    this.options = {
      responsive: true,
    };
  }

  createChart = (data, options) => {
    return (
      <div>
        <Container width={300} height={300}>
          <Radar data={data} options={options} width={1} height={1} />
        </Container>
      </div>
    );
  };

  render() {
    return (
      <Container>
        {/* {createChart(this.data, this.options)} */}
        {this.createChart(this.data)}
      </Container>
    );
  }
}

export default MotivDashboard;
