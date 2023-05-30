import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from "./Weather";
import bg2 from "./Videos/bg2.mp4";

export default function App() {
  return (
    <div className="App"> 
    <div className='Container'>
      <video className='bgVideo' autoPlay loop muted style={{
        position:'absolute',
        width:'100%',
        height:'100%',
        top:0,
        left:0,
        objectFit:'cover',
        overflow:"hidden",
        display:'flex',
        fontFamily:"sans-serif",
        zIndex:"-1"
      }} >
    <source src={bg2} type='video/mp4' />
      </video>

     <h1 className="text-center">React Weather App.</h1>
     <Weather defaultCity="Cape Town"/>
     <footer>
      This project was coded by <a href="https://incomparable-dieffenbachia-a79cb7.netlify.app/" target="_blank" rel="noreferrer">Kamogelo Mashike</a> and is <a href="https://github.com/Kamogelo98/react-weather-app" target="_blank" rel="noreferrer" >open-sourced on GitHub</a>  and<a href="https://profound-elf-653747.netlify.app/" target="_blank" rel="noreferrer"> hosted on Netlify</a>
      </footer>
      </div>
    </div>
  );
}                                    

