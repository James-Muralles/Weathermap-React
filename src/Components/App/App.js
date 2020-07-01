import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import Map from '../Map/Map'

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      lng: 5,
      lat: 34,
      zoom: 2
    };
  }

  render(){
return (
    <Map/>
)
  }
}

export default App;
