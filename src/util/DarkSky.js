import React from "react";


class DarkSky extends React.Component{
    getWeather(){
        fetch("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyKey + "/" + marker.getLngLat().lat + "," + marker.getLngLat().lng).done(function (data) {
            console.log(data);
            console.log(new Date(data.currently.time * 1000));
            console.log(data.daily.data[0].apparentTemperatureHigh);
            console.log(data.currently.icon);

            reverseGeocode({
                    lat: marker.getLngLat().lat,
                    lng: marker.getLngLat().lng
                },
                mapboxgl.accessToken).then(function(results){
                console.log(results);
                $('h1').html(results )
            });
    }
}
}
