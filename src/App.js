import React, { useEffect, useState } from 'react';
import './App.css';
import Temperature from './components/Temperature';
import Parameters from './components/Parameters';
import Search from './components/Search';
import Clear from './images/Clear.png';
import Drizzle from './images/Drizzle.png';
import Rain from './images/Rain.png';
import Snow from './images/Snow.png';
import Mist from './images/Mist.png';
import Thunderstorm from './images/Thunderstorm.png';
import Clouds from './images/Clouds.png';


const App = () => {

  const API_KEY = "ea7252d6c18b456727930e25448f38d6";

  const [data, setData] = useState({});
  const [search, setSearch] = useState('');
  const [city, setCity] = useState('Meerut');
  const [hello, setHello] = useState([]);
  const [backimg, setBackimg] = useState(Clear);
  useEffect(() => {
    getWeather();
    console.log("Effect has been run!");
  }, [city]);




  const getWeather = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    const data = await response.json();
    setData(data);
    setHello([data]);
    getBackimg(data.weather[0].id);
    console.log(data);
  };

  const getBackimg=(id)=>{
    if(id>=200 && id<=299){
      setBackimg(Thunderstorm);
    }
    else if (id>=300 && id<=399) {
      setBackimg(Drizzle);
    }
    else if (id>=500 && id<=599) {
      setBackimg(Rain);
    }
    else if (id>=600 && id<=699) {
      setBackimg(Snow);
    }
    else if (id>=700 && id<=799) {
      setBackimg(Mist);
    }
    else if (id==800) {
      setBackimg(Clear);
    }
    else if (id>=800 && id<=899) {
      setBackimg(Clouds);
    }
  }


  return (
    <div className="App">
      <img src={backimg} alt="" className="background-img" />
      <Search search={search} setSearch={setSearch} city={city} setCity={setCity} />

      {hello.map(helloe => (
        <Temperature key={data.id} cityName={data.name} weatherdesc={data.weather[0].description} temperature={data.main.temp} iconcode={data.weather[0].icon} country={data.sys.country} feelsLike={data.main.feels_like} tempMin={data.main.temp_min} tempMax={data.main.temp_max} />
      ))}


      {hello.map(helloe=>(
        <Parameters humidity={data.main.humidity} pressure={data.main.pressure} cloudCover={data.clouds.all} windSpeed={data.wind.speed} />
      ))}


    </div>
  );
}

export default App;
