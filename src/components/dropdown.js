import React, { Component } from 'react';
import Scatter from './Scatter';
import StateTable from './StateTable';

function compareValues(key, order = 'asc') {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0;
      }
  
      const varA = (typeof a[key] === 'string')
        ? a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string')
        ? b[key].toUpperCase() : b[key];
  
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order === 'desc') ? (comparison * -1) : comparison
      );
    };
  }

class Dropdown extends Component{
    constructor(props){
        super(props);
        this.state = {selection: "CA", dailyData: [], histData: [], scatterData: [], selectedData: {}};
    }
    handleChange(e){
        this.setState({selection:e.target.value}); 
        var dat = this.state.histData;
        var s = [];
        dat.forEach(v => {
            if (v.state === e.target.value){
                s.unshift(v);
            }
        });
        this.setState({scatterData: s})
        dat = this.state.dailyData;
        var today;
        dat.forEach(v => {
            if (v.state === e.target.value){
                today = v;
                // if (today.recovered === null) today.recovered = 'Unreported';
            }
        });
        this.setState({selectedData: today});
    }
    componentDidMount(){
        fetch('https://covidtracking.com/api/v1/states/current.json')
            .then(response => response.json())
            .then(data => {
                var dat = data;
                dat.sort(compareValues('positive', 'desc'));
                dat.forEach(v => {
                    // if (v.recovered === null) v.recovered = 'Unreported'
                })
                this.setState({dailyData: dat});
                var today;
                dat.forEach(v => {
                if (v.state === this.state.selection){
                    today = v;
                    // if (today.recovered === null) today.recovered = 'Unreported';
                }
        });
        this.setState({selectedData: today});
            });
        fetch('https://covidtracking.com/api/v1/states/daily.json')
            .then(response => response.json())
            .then(data => {
                data.forEach(z => {
                    var v = z.date.toString(10);
                    var d = v[4] + v[5] + '-' + v[6] + v[7] + '-' + v[0] + v[1] + v[2] + v[3];
                    z.date = d;
                });
                this.setState({histData: data});
                var dat = data;
                var s = [];
                dat.forEach(v => {
                    if (v.state === this.state.selection){
                        s.unshift(v);
                    }
                });
                this.setState({scatterData: s})
        }); 
        
    }
    render(){
        if (this.state.dailyData === null) return null;
        var reco = this.state.selectedData.recovered;
        if (reco === null) reco = 'Unreported';
        return(
            <div>
                <StateTable dat={this.state.dailyData} />
                <select value={this.state.selection} onChange={(e) => {this.handleChange(e);}}>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                </select>
                <h1>{this.state.selection}</h1>
                <h2>Total Positive Cases: {this.state.selectedData.positive} Cases</h2>
                <h2>Predicted Positive Cases: {this.state.selectedData.positive * 10}-{this.state.selectedData.death * 1000} Cases</h2>
                <h2>Total Deaths: {this.state.selectedData.death} Deaths</h2>
                <h2>Total Recovered: {reco} Recoveries</h2>

                <p>Positive Infections by Date</p>
                <Scatter sel={this.state.selection} dat={this.state.scatterData} what="positive"/>
                <p>Daily Infection Rate</p>
                <Scatter sel={this.state.selection} dat={this.state.scatterData} what="positiveIncrease"/>
                <p>Confirmed Deaths by Date</p>
                <Scatter sel={this.state.selection} dat={this.state.scatterData} what="death"/>
                <p>Currently Hospitalized*</p>
                <Scatter sel={this.state.selection} dat={this.state.scatterData} what="hospitalizedCurrently"/>
                <p>Currently In ICU*</p>
                <Scatter sel={this.state.selection} dat={this.state.scatterData} what="inIcuCurrently"/>
                <p>*Not all states report these statistics, charts may be blank</p>
            </div>
        );
    }
}

export default Dropdown;