import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { RootState } from './store/store';
import Search from './components/search';
import Alert from './components/alerts';
import Weather from './components/weather';
import { setAlert } from './store/actions/alertsActions';
import { setError } from './store/actions/weatherActions';

const App: FC = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state: RootState) => state.weather.data);
  const loading = useSelector((state: RootState) => state.weather.loading);
  const error = useSelector((state: RootState) => state.weather.error);
  const alertMsg = useSelector((state: RootState) => state.alert.message);

  return (
    <div className="has-text-centered">
      <Search title="Enter Latitude & Longitude and press search button" />
      {loading ? <h2 className="is-size-3 py-2">Loading...</h2> : weatherData && <Weather Data={weatherData} />}
      
      {/* Conditional rendering of East African countries list */}
      {!weatherData && (
      <div className="east-african-countries">
        <h3 className="is-size-4 py-2">East African Countries and Coordinates:</h3>
        <ul>
          <li>
            <strong>Kenya:</strong> Latitude: 1.2921° S, Longitude: 36.8219° E
          </li>
          <li>
            <strong>Tanzania:</strong> Latitude: 6.3690° S, Longitude: 34.8888° E
          </li>
          <li>
            <strong>Uganda:</strong> Latitude: 1.3733° N, Longitude: 32.2903° E
          </li>
          <li>
            <strong>Rwanda:</strong> Latitude: 1.9403° S, Longitude: 29.8739° E
          </li>
          <li>
            <strong>Burundi:</strong> Latitude: 3.3763° S, Longitude: 29.3599° E
          </li>
          <li>
            <strong>South Sudan:</strong> Latitude: 6.8769° N, Longitude: 31.3069° E
          </li>
          <li>
            <strong>Ethiopia:</strong> Latitude: 9.1450° N, Longitude: 40.4897° E
          </li>
          <li>
            <strong>Somalia:</strong> Latitude: 5.1521° N, Longitude: 46.1996° E
          </li>
          <li>
            <strong>Djibouti:</strong> Latitude: 11.8251° N, Longitude: 42.5903° E
          </li>
        </ul>
      </div>
      )}

      {alertMsg && <Alert message={alertMsg} onClose={() => dispatch(setAlert(''))} />}
      {error && <Alert message={error} onClose={() => dispatch(setError())} />}
    </div>
  );
}

export default App;
