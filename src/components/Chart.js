import React, { Component } from 'react';
import { Scatter } from 'react-chartjs-2';
import dataset from './single_scatter_data.json';

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datasets: [
                {
                    label: 'My First dataset',
                    fill: false,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 3,
                    pointHoverRadius: 8,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 3,
                    pointRadius: 2,
                    pointHitRadius: 10,
                    data: dataset
                },
            ],
        };
    }


    render() {

        return (
            <div className="chart">
                <Scatter
                    data={this.state}
                />
            </div>
        )
    }
}

export default Chart;