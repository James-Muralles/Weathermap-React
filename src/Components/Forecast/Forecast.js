import React from "react";
import DarkSky from "../../util/DarkSky";


class Forecast extends React.Component {
    render(){
        return (
            <div id="forecast-cards"
                 className="text-center sticky-top rounded mb-auto d-flex justify-content-center">

                <div className="col-3 rounded day-1" id="day-1">
                    <DarkSky/>
                </div>
                <div className="col-3 rounded day-2" id="day-2">Day 2</div>
                <div className="col-3 rounded day-3" id="day-3">Day 3</div>


            </div>
        )
    }
}
export default Forecast;
