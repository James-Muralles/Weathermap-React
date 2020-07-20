import React from "react";
import fetch from "node-fetch";
// let fetch = require('node-fetch');

const darksky = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/";
const key = 'a8197a0c91a20e20df9850290ed6b6f5';
const lat = '45';
const lng = '-75';
const uri = darksky + key + '/' + lat + ',' + lng;

const options = {
    method: 'GET',
    mode: 'cors'
};
const req = new fetch.Request(uri, options);

class DarkSky extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentWeather: [''],
        };
        this.getWeather = this.getWeather.bind(this)

    }

    getWeather() {
        fetch(req)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error('Bad HTTP!')
                }

            }).then((j) => {
            console.log(j.currently.temperature);
            this.setState({currentWeather: j.currently.temperature})


        }).catch((err) => {
            console.log('Error:', err.message)
        });
    }

    // weather(){
    //     fetch(req)
    //         .then((res) =>{
    //             console.log(res.json())
    //         }).then((data) => {
    //             console.log(data.currently.temperature);
    //         this.setState({currentWeather: data.currently.temperature})
    //
    //     })
    //
    //
    // }
    componentDidMount() {
        this.getWeather()
    }

    render(){


        return (
            <h1>
                {this.state.currentWeather}

            </h1>
        )
    }


}
export default DarkSky;


