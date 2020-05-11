import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

class StateTable extends Component {
    render() {
        return (
            <div>
                <p>*Not all states report these statistics, some entries may be blank</p>
                <Table striped bordered>
                <thead>
                    <tr>
                        <th>State</th>
                        <th>Total Tests</th>
                        <th>Positive Test Results</th>
                        <th>Negative Test Results</th>
                        <th>Total Deaths</th>
                        <th>Total Recovered*</th>
                    </tr>
                </thead>
                <tbody>
                        {this.props.dat.map(y => <tr key={y.state}><td>{y.state}</td>
                                                            <td>{y.totalTestResults}</td>
                                                            <td>{y.positive}</td>
                                                            <td>{y.negative}</td>
                                                            <td>{y.death}</td>
                                                            <td>{y.recovered}</td></tr>)}
                </tbody>
            </Table>
        </div>
        )
    }
}

export default StateTable;