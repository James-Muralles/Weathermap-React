import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import map from '../Map/Map'

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
    <map/>
)
  }
}

export default App;
