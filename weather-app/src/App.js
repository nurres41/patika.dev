import { useContext, useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import Header from './components/Header';

//Icon Images
import clearDay from './images/clear-day.png'
import cloudyDay from './images/partly-cloudy-night.png'
import rainDay from './images/rain.png'
import ApiDataContext from './context/ApiDataContext';

function App() {
  
  const apiData = useContext(ApiDataContext)
  const fifteenDays = apiData.dailyWeather;


  return (
    <div className="App">
      <Header />
      {fifteenDays?.map((item) => (
        <div>
          <small>{item.datetime}</small>
          <div>
          <span>{item.tempmax} ||</span>
          <span>  {item.tempmin}</span>
          </div>
          <h6>
            {item.temp}
          </h6>
        </div>
      ))}
    </div>
  );
}

export default App;
