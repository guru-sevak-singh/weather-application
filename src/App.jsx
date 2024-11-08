import logo from './logo.svg';
import './App.css';
import WeatherForm from './components/WeatherForm';
import ShowWeather from './components/ShowWeather';
import { useState } from 'react';
import Loader from './components/Loader';
import NoDataYet from './components/NoDataYet';


async function getRequest(url) {
  console.log(url);
  return fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      return data;
    })
    .catch(function (error) {
      console.error('Error:', error);
      throw new Error('Failed to fetch data');
    });
}

async function getWeatherData(city_name) {
  let api_url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=27cd00622fac631c60e9a9d78d94799b`
  let weather_data = await getRequest(api_url)
  return weather_data
}

function App() {

  let [city, setCity] = useState('');
  let [weatherData, setWeatherData] = useState({
    city: "",
    country: "",
    avg_temp: "",
    max_temp: "",
    min_temp: "",
    humidity: "",
    pressure: "",
  })

  let [loader, setLoader] = useState(false)

  async function submitForm(event) {
    setLoader(true)
    event.preventDefault();
    let api_data = await getWeatherData(city)
    console.log('API DAta\n', api_data);
    if (api_data.cod !== '400') {
      let new_weather_data = {
        "city": api_data.name,
        "country": api_data.sys.country,
        "avg_temp": api_data.main.temmp,
        "min_temp": api_data.main.temp_min,
        "max_temp": api_data.main.temp_max,
        "pressure": api_data.pressure,
        "humidity": api_data.humidity,
      }
      setWeatherData(new_weather_data);
    }
    setLoader(false);
  }

  return (
    <div className="App">

      {(loader) ?
        <Loader />
        :
        ""
      }

      <div className="container">
        <div className="row">

          <div className="col-md-6 py-4 mt-5">
            <WeatherForm submitForm={submitForm} city={city} setCity={setCity} />
          </div>
          <div className="col-md-6 mt-5 py-4">
          </div>

          <div className="col-md-3"></div>
          <div className="col-md-6">
            {
              (weatherData.city === "")?
              <NoDataYet />
              :
              <ShowWeather weatherData={weatherData} />
            }

          </div>


        </div>
      </div>
    </div>
  );
}

export default App;
