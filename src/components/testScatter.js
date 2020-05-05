import React, { Component } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

class Scatter extends Component {
    render() {
        const data = [
            {x: '5-3-2020', uv: 456},
            {x: '5-4-2020', uv: 5670},
            {x: '5-5-2020', uv: 67800}
        ];
        return (
            <div>
                <LineChart width={600} height={300} data={data}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="x" />
                    <YAxis />
                </LineChart>
            </div>
        );
    }
}

export default Scatter;