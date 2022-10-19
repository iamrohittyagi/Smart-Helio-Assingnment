import React, { Component } from 'react'
import Chart from "react-apexcharts";

export class Charts extends Component {
     constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1,2,3,4,5,6,7,8,9,10,11,12]
        },
        yaxis:{
          categories: [1000,2000,4000,6000,8000,10000]
        }
      },
      series: [
        {
          data: [1000, 1500, 1500, 4000, 5000, 3000, 3500, 1000,4000,6000,8000,9000,10000]
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="800"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Charts