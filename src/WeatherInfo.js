import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";


export default function WeatherInfo(props){
    return (
        <div className="weatherInfo">
            <h1>{props.code.city}</h1>
    <ul>
        <li>
            <FormattedDate date ={props.code.date} />
        </li>
        <li className="text-capitalize">{props.code.description}</li>
    </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex"> 
            <div >
              <WeatherIcon code={props.code.icon} size={50} />
            </div>

            <div>
              <WeatherTemperature celsius={props.code.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6">
        <div>
          <ul>
            <li>Humidity: {props.code.humidity}%</li>
            <li>Wind: {props.code.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}