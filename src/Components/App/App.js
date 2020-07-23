import React from 'react';
import './App.css';
import MapContainer from "../Map/Map";
import Forecast from "../Forecast/Forecast";

class App extends React.Component {

    render() {
        return (
            <div >

            <div >


                    <Forecast/>


                <div >
                <MapContainer className="map"/>
                </div>
            </div>
            </div>

        )
    }
}

const style = {
    // position: 'absolute',
    // left: '50%',
    // top: '50%',
    // transform: 'translate(-50%, -50%)'
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    // alignItems: 'center',
    // height: '100vh'
};

export default App;
