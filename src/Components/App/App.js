import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import MapBox from "../Map/MapBox";
import Map from "../Map/Map";

class App extends React.Component {

    render() {
        return (
<div style={style}>

            <MapBox  className="map"/>
</div>

        )
    }
}
const style={
    // position: 'absolute',
    // left: '50%',
    // top: '50%',
    // transform: 'translate(-50%, -50%)',
    // margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
};

export default App;
