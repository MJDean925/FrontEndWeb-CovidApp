import React, { Component } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

class Scatter extends Component { 
    render() {
        return (
            <div>
                <LineChart width={600} height={300} data={this.props.dat}>
                    <Line type="monotone" dataKey={this.props.what} stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </div>
        );
    }
}

export default Scatter;
