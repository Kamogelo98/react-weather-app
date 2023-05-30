import React from 'react';
import Weather from './Weather';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className='container'>
     <h1 className="text-center">React Weather App.</h1>
     <Weather defaultCity="Cape Town"/>
     <footer>
      <a href="https://github.com/Kamogelo98/react-weather-app" target="_blank" rel="noreferrer" >Open Source Project </a>
        coded by Kamogelo Mashike</footer>
        </div>
    </div>
  );
}
 
export default App;
