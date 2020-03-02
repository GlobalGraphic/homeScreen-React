import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Clock from './Clock';
import Weather from './Weather';
// import Search from './Search';

const App = () => {

  const [time, setTimer] = useState([]);
  const [msg, setMsg] = useState([]);
  const [weather, setWeather] = useState([]);
  const [name, setName] = useState([]);

  useEffect(() => {
    getTime();
  }, []);

  useEffect(() => {
    getWeather();
  }, []);

  const getTime = () => {
    let today = new Date(); // get current date
    let h = today.getHours().toLocaleString(); // get hrs
    let m = today.getMinutes().toLocaleString(); // get minutes
    let s = today.getSeconds().toLocaleString(); // get seconds

    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);

    const time = h + ':' + m + ':' + s;
    const timeout = setTimeout(getTime, 1000);

    setTimer(time); // import current time to state

    if(h < 12) {
      setMsg('Good Morning');
    }else if(h > 12 || h < 18) {
      setMsg('Good Afternoon');
    }else {
      setMsg('Good Evening');
    }

  }

  const checkTime = (i) => {
    if(i < 10) { i = "0" + i }; // add zero in front of number when < 0
    return i;
  }


  let lat;
  let lon;

      const getWeather = () => {
        if(navigator.geolocation){
          navigator.geolocation.getCurrentPosition(position => {
            lon = position.coords.longitude;
            lat = position.coords.latitude;

            const APP_KEY = "e802333933a66ec7a7588d658785ad09";
            const API = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${APP_KEY}`;

            fetch(API)
            .then(response => {
              return response.json();
            })
            .then(data => {
              setWeather(data.main);
              setName(data.name);
            })

          });
        }
      }

  return (
    <div className="App">
      <div className="container">
        <Clock time={time} message={msg}/>
        <Weather city={name} weather={Math.floor(weather.temp)}/>
        <form action="https://www.google.com/search" method="get" id="search-form" target="_blank">
            <input type="text" name="q" placeholder="Search Google..." autoComplete="off" autoFocus/>
            <button type="button"><i className="fas fa-search"></i></button>
        </form>
      </div>
    </div>
  );
}

export default App;
