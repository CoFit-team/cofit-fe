import React from "react";
import { Container } from "semantic-ui-react";
import { Radar } from "chart.js";

class RadarChart extends React.Components {
  constructor() {
    super();
    this.data = {
      labels: ["😍", "😁", "😐", "🙁", "😣"],
      datasets: [{ data: [40, 17, 22, 32, 47] }],
    };

    this.options = {
      responsive: true,
    };
  }

  render() {
    return (
      <div>
        <Container width={300} height={300}>
          <Radar data={this.data} options={this.options} width={1} height={1} />
        </Container>
      </div>
    );
  }
}

export default RadarChart;
