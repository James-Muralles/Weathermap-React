import React from "react";


class Forecast extends React.Component {
    render(){
        return (
            <div id="forecast-cards"
                 className="row text-center sticky-top rounded mb-auto d-flex justify-content-center">

                <div className="col-3 rounded day-1" id="day-1">Day 1</div>
                <div className="col-3 rounded day-2" id="day-2">Day 2</div>
                <div className="col-3 rounded day-3" id="day-3">Day 3</div>


            </div>
        )
    }
}
export default Forecast;
