import React, { Component } from 'react';
import { Scatter } from 'react-chartjs-2';
import scatter_dataset from './scatter_data.json';

const first_chart = {
    datasets: [
        {
            backgroundColor: 'red',
            data: scatter_dataset['chart_1'],
            label: "chart_1"
        },
    ],
};

const second_chart = {
    datasets: [
        {
            backgroundColor: 'green',
            data: scatter_dataset['chart_2'],
            label: "chart_2"
        }
    ],
};

const third_chart = {
    datasets: [
        {
            backgroundColor: 'blue',
            data: scatter_dataset['chart_3'],
            label: "chart_3"
        }
    ],
};

const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
        xAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
};

class Chart extends Component {

    render() {
        return (
            <div className="chart">
                {
                    {
                        '1': <Scatter data={first_chart} options={options} />,
                        '2': <Scatter data={second_chart} options={options} />,
                        '3': <Scatter data={third_chart} options={options} />
                    }[this.props.chart]
                }
            </div>
        )
    }
}

export default Chart;