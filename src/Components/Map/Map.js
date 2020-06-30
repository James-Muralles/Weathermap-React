import React from 'react';
import MapGL, {NavigationControl} from 'react-map-gl';
// import 'Map.css'
import MapBox from '../../util/MapBox';


// const mapboxToken = 'pk.eyJ1IjoiamltbXktbXVyYWxsZXMiLCJhIjoiY2s3a3gwNDA2MDFqcTNrcnI1aXl5bHBnMiJ9.sOfunMTqJXG27iCEkSzlnA';
// // eslint-disable-next-line no-undef
// mapboxgl.accessToken = mapboxToken;
// // var coordinates = document.getElementById('coordinates');
// // eslint-disable-next-line no-undef
// var renderMap = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/streets-v9',
//     zoom: 15,
//     center: [-98.4916, 29.4252]
//
// });
const navStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '10px'
};
class Map extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                latitude: 17.442120,
                longitude: 78.391384,
                zoom: 15,
                bearing: 0,
                pitch: 0,
                width: '100%',
                height: 500,
            }
        };
    }
        render() {
            const {viewport} = this.state;
            return (
                <MapGL
                    {...viewport}
                    onViewportChange={(viewport) => this.setState({viewport})}
                    mapStyle="mapbox://styles/mapbox/streets-v10"
                    mapboxApiAccessToken=>
                    <div className="nav" style={navStyle}>
                        <NavigationControl onViewportChange={(viewport) => this.setState({viewport})}/>
                    </div>
                </MapGL>
            );
        }
}
export default Map;

