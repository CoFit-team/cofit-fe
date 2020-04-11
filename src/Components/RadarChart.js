import React from "react";
import { Container } from "semantic-ui-react";
import { Radar } from "react-chartjs-2";

class RadarChart extends React.Component {
  constructor() {
    super();
    this.data = {
      labels: ["😍", "😁", "😐", "🙁", "😣"],
      datasets: [{ data: [17, 22, 40, 32, 47] }],
    };

    this.options = {
      responsive: true,
      fill: true,
      legend: {
        display: false,
        labels: {
          fontColor: "rgb(255, 99, 132)",
          
        },
      },
    };
  }
  render() {
    return (
      <div>
        <Container text>
          <Radar data={this.data} options={this.options} width={1} height={1} />
        </Container>
      </div>
    );
  }
}

export default RadarChart;
