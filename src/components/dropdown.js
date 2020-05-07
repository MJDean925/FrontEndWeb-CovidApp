import React, { Component } from 'react';
import Scatter from './Scatter';
import firebase from './firebase';

class Dropdown extends Component{
    constructor(props){
        super(props);

        // var firebaseConfig = {
        //     apiKey: "AIzaSyANBWBR4fSx-dpo5KmkMxpyAXjy2V6WQlU",
        //     authDomain: "covid-web-704d0.firebaseapp.com",
        //     databaseURL: "https://covid-web-704d0.firebaseio.com",
        //     projectId: "covid-web-704d0",
        //     storageBucket: "covid-web-704d0.appspot.com",
        //     messagingSenderId: "96586993761",
        //     appId: "1:96586993761:web:dc17f95d9f06a91895da20"
        //   };
        //   // Initialize Firebase
        //   firebase.initializeApp(firebaseConfig);

          //this.db = firebase.firestore();
        
        this.state = {selection: "USA", db: firebase.firestore()};
        //var db = firebase.firestore();
        //db.collection('USA').get().then((query) => {query.docs.forEach(doc => {console.log(doc.id);});})

    }
    handleChange(e){
        this.setState({selection:e.target.value}); 
    }
    render(){
        return(
            <div>
                <select value={this.state.selection} onChange={(e) => {this.handleChange(e);}}>
                    <option value="USA">USA</option>
                    <option value="Alabama">Alabama</option>
                    <option value="Alaska">Alaska</option>
                    <option value="Arizona">Arizona</option>
                    <option value="Arkansas">Arkansas</option>
                    <option value="California">California</option>
                    <option value="Colorado">Colorado</option>
                    <option value="Connecticut">Connecticut</option>
                    <option value="Delaware">Delaware</option>
                    <option value="Florida">Florida</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Hawaii">Hawaii</option>
                    <option value="Idaho">Idaho</option>
                    <option value="Illinois">Illinois</option>
                    <option value="Indiana">Indiana</option>
                    <option value="Iowa">Iowa</option>
                    <option value="Kansas">Kansas</option>
                    <option value="Kentucky">Kentucky</option>
                    <option value="Louisiana">Louisiana</option>
                    <option value="Maine">Maine</option>
                    <option value="Maryland">Maryland</option>
                    <option value="Massachusetts">Massachusetts</option>
                    <option value="Michigan">Michigan</option>
                    <option value="Minnesota">Minnesota</option>
                    <option value="Mississippi">Mississippi</option>
                    <option value="Missouri">Missouri</option>
                    <option value="Montana">Montana</option>
                    <option value="Nebraska">Nebraska</option>
                    <option value="Nevada">Nevada</option>
                    <option value="New Hampshire">New Hampshire</option>
                    <option value="New Jersey">New Jersey</option>
                    <option value="New Mexico">New Mexico</option>
                    <option value="New York">New York</option>
                    <option value="North Carolina">North Carolina</option>
                    <option value="North Dakota">North Dakota</option>
                    <option value="Ohio">Ohio</option>
                    <option value="Oklahoma">Oklahoma</option>
                    <option value="Oregon">Oregon</option>
                    <option value="Pennsylvania">Pennsylvania</option>
                    <option value="Rhode Island">Rhode Island</option>
                    <option value="South Carolina">South Carolina</option>
                    <option value="South Dakota">South Dakota</option>
                    <option value="Tennessee">Tennessee</option>
                    <option value="Texas">Texas</option>
                    <option value="Utah">Utah</option>
                    <option value="Vermont">Vermont</option>
                    <option value="Virginia">Virginia</option>
                    <option value="Washington">Washington</option>
                    <option value="West Virginia">West Virginia</option>
                    <option value="Wisconsin">Wisconsin</option>
                    <option value="Wyoming">Wyoming</option>
                </select>
                <Scatter sel={this.state.selection} db={this.state.db}/>
                <Scatter sel={this.state.selection} db={this.state.db}/>

            </div>
        );
    }
}

export default Dropdown;