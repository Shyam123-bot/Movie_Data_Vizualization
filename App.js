import React, { Component } from "react";
import TableComponent from "./TableComponent.js";
import MOCK_DATA from "./mock-data";
import "./App.css";
import ScatterChart from "./charts/ScatterChart.js";
import Doughnut from "./charts/doughNut.js";
import LineChart from "./charts/LineChart.js";
import RadarChart from "./charts/RadarChart.js";
import PieChart from "./charts/PieChart.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartType: null,
      chartTitle: "Movie List",
    };
  }

  handleScatterChartClick = () => {
    this.setState({
      chartType: "scatter",
      chartTitle: "Scatter Chart",
    });
  };

  handleHeatChartClick = () => {
    this.setState({
      chartType: "heat",
      chartTitle: "Dough Nut Chart",
    });
  };

  handleLineChartClick = () => {
    this.setState({
      chartType: "line",
      chartTitle: "Line Chart",
    });
  };

  handleBarChartClick = () => {
    this.setState({
      chartType: "bar",
      chartTitle: "Radar Chart",
    });
  };

  handlePieChartClick = () => {
    this.setState({
      chartType: "pie",
      chartTitle: "Pie Chart",
    });
  };

  render() {
    const { chartType } = this.state;

    let chartComponent;
    switch (chartType) {
      case "scatter":
        chartComponent = <ScatterChart />;
        break;
      case "heat":
        chartComponent = <Doughnut />;
        break;
      case "line":
        chartComponent = <LineChart />;
        break;
      case "bar":
        chartComponent = <RadarChart />;
        break;
      case "pie":
        chartComponent = <PieChart />;
        break;
      default:
        chartComponent = null;
    }

    return (
      <div>
        <h1 className="text-center">{this.state.chartTitle}</h1>
        <div className="btn-container">
          <button className="btn" onClick={this.handleScatterChartClick}>
            Scatter Chart
          </button>
          <button className="btn" onClick={this.handleHeatChartClick}>
            DoughNut Chart
          </button>
          <button className="btn" onClick={this.handleLineChartClick}>
            Line Chart
          </button>
          <button className="btn" onClick={this.handleBarChartClick}>
            Radar Chart
          </button>
          <button className="btn" onClick={this.handlePieChartClick}>
            Pie Chart
          </button>
        </div>
        {chartComponent}
        {!chartComponent && <TableComponent data={MOCK_DATA} />}
      </div>
    );
  }
}

export default App;
