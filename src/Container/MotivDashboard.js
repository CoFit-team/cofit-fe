import React from "react";
import { Bar } from "react-chartjs-2";

class MotivDashboard extends React.Component {
  constructor() {
    super();
    this.state = { dashBoardState: "" };
    this.data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "my happy emotions",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: [0, 10, 5, 2, 20, 30, 45],
        },
      ],
    };
  }

  createChart = (data) => {
    return (
      <div>
        <Bar data={data} />
      </div>
    );
  };

  render() {
    return <div>{this.createChart(this.data)}</div>;
  }
}

export default MotivDashboard;
