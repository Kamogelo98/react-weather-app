import React from "react";
import "./Weather.css";



export default function Weather(){
    return(
 <div className="Weather">
    <form>
        <div className="row">
        <div className="col-9">
        <input type="search" placeholder="Search for a City..." className="form-control" autoFocus="on"/>
        </div>
        <div className="col-3">
        <input type="submit" value="Search" className="btn btn-primary w-100"/>
        </div>
        </div>
    </form>
    <h1>Pretoria</h1>
    <ul>
        <li>Thursday 11:00</li>
        <li>Mostly Cloudy</li>
    </ul>
    <div className="row">
        <div className="col-6">
          <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="mostly cloudy"/>
         <span className="temperature">6</span>
         <span className="unit">°C</span>
        </div>
        <div className="col-6">
            <ul>
                <li>Precipitation: 18%</li>
                <li>Humidity: 67%</li>
                <li>Wind: 14km/h</li>
            </ul>

        </div>
    </div>

 </div>

    ) 
}