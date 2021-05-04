import React, { Component } from 'react';
import { Scatter } from 'react-chartjs-2';
import scatter_dataset from './scatter_data.json';

const first_chart = {
    datasets: [
        {
            backgroundColor: 'blue',
            data: scatter_dataset['chart_1']
        },
        {
            backgroundColor: 'red',
            data: scatter_dataset['chart_2']
        },
    ],
};

class Chart extends Component {


    render() {

        return (
            <div className="chart">
                <Scatter data={first_chart} />
            </div>
        )
    }
}

export default Chart;