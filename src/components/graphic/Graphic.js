import React, { Component } from "react";
import "./graphic.css";

var LineChart = require("react-chartjs").Line;

class Graphic extends Component {
  state = {
    data: ""
  };

  getGaphicHeight = () => {
    if (window.innerWidth <= 1024) {
      return 200;
    } else if (window.innerWidth > 1025) {
      return 400;
    }
  };

  async componentDidMount() {
    const response = await fetch("http://dev.4all.com:3050/pageViews");
    const graphicData = await response.json();

    const month = graphicData.map(data => data.month);
    const views = graphicData.map(data => data.views);

    const data = {
      labels: month,
      datasets: [
        {
          fillColor: "rgb(204,228,250)",
          strokeColor: "#81bafe",
          pointColor: "81bafe",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(151,187,205,1)",
          data: views
        }
      ]
    };

    this.setState({
      data
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div
        className="d-flex flex-column justify-content-center container-graphic mt-4"
        id="container-graphic"
      >
        <h2 className="mt-2 mb-2 ml-2 text-graphic">Site Traffic Overview</h2>
        {data ? (
          <LineChart
            width={window.innerWidth}
            height={this.getGaphicHeight()}
            data={data}
          />
        ) : null}
      </div>
    );
  }
}

export default Graphic;
