  import React, { FC } from 'react';
  import { WeatherData } from '../store/types';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faTint, faWind, faThermometerHalf, faCompass  } from '@fortawesome/free-solid-svg-icons';
  
  
  
  interface WeatherProps {
    Data: WeatherData;
  }

  const Weather: FC<WeatherProps> = ({ Data }) => {
    const fahrenheit = (Data.main.temp * 1.8 - 459.67).toFixed(2);
    const celsius = (Data.main.temp - 273.15).toFixed(2);

    return (
      <section className="section">
        <div className="container">
          <h1 className="title has-text-centered" style={{ marginBottom: 50 }}>
            {Data.name}-{Data.sys.country}
          </h1>
          <div>
            <p className="heading">{Data.weather[0].description}</p>
            <p className="title"><img src={`http://openweathermap.org/img/wn/${Data.weather[0].icon}.png`} alt=""/></p>
          </div>
         
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          {/* Temperature */}
          <div className="section-card border-gray-400 border p-4" style={{ flex: '1 0 calc(25% - 16px)' }}>
            <div className="section-content">
              <FontAwesomeIcon icon={faThermometerHalf} size="2x" className="mr-2" />
              <div>
                <p className="heading">Temperature</p>
                <p className="mb-2">{fahrenheit} °F</p>
                <p>{celsius} °C</p>
              </div>
            </div>
          </div>

          {/* Humidity */}
          <div className="section-card border-gray-400 border p-4" style={{ flex: '1 0 calc(25% - 16px)' }}>
            <div className="section-content">
              <FontAwesomeIcon icon={faTint} size="2x" className="mr-2" />
              <div>
                <p className="heading">Humidity</p>
                <p className="text-2xl font-bold">{Data.main.humidity}%</p>
              </div>
            </div>
          </div>

          {/* Pressure */}
          <div className="section-card border-gray-400 border p-4" style={{ flex: '1 0 calc(25% - 16px)' }}>
            <div className="section-content">
              <FontAwesomeIcon icon={faCompass} size="2x" className="mr-2" />
              <div>
                <p className="heading">Pressure</p>
                <p className="text-2xl font-bold">{Data.main.pressure} hPa</p>
              </div>
            </div>
          </div>

          {/* Wind Speed */}
          <div className="section-card border-gray-400 border p-4" style={{ flex: '1 0 calc(25% - 16px)' }}>
            <div className="section-content">
              <FontAwesomeIcon icon={faWind} size="2x" className="mr-2" />
              <div>
                <p className="heading">Wind Speed</p>
                <p className="text-2xl font-bold">{Data.wind.speed} m/s</p>
                <p className="mb-1">Direction: {Data.wind.deg}°</p>
              </div>
            </div>
          </div>



          </div>
        </div>
      </section>
    );
  };

  export default Weather;
