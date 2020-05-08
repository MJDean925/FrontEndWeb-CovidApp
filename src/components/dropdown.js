import React, { Component } from 'react';
import Scatter from './Scatter';
import firebase from './firebase';

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
        this.state = {selection: "CA", db: firebase.firestore()};
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
    }
    componentDidMount(){
        fetch('https://covidtracking.com/api/v1/states/current.json')
            .then(response => response.json())
            .then(data => {
                var dat = data;
                dat.sort(compareValues('positive', 'desc'));
                console.log(dat);
                this.setState({dailyData: dat});
            });
        fetch('https://covidtracking.com/api/v1/states/daily.json')
            .then(response => response.json())
            .then(data => {
                data.forEach(v => {
                    //Need to reformat date to make it look nicer on graph
                    console.log(v.date);
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

        return(
            <div>
                <select value={this.state.selection} onChange={(e) => {this.handleChange(e);}}>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
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
                <Scatter sel={this.state.selection} db={this.state.db} dat={this.state.scatterData}/>
                <Scatter sel={this.state.selection} db={this.state.db} dat={this.state.scatterData}/>

            </div>
        );
    }
}

export default Dropdown;