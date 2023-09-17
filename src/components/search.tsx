import React, { FC, useState, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk'
import { WeatherAction } from '../../src/store/types';
// import { setAlert } from '../store/actions/alertsActions';
import { getWeather, setLoading } from '../store/actions/weatherActions';
import { RootState } from '../store/store';

interface SearchProps {
  title: string;
}

const Search: FC<SearchProps> = ({ title }) => {
  const dispatch = useDispatch<ThunkDispatch<RootState, null, WeatherAction>>(); 
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');

  const changeLatHandler = (e: FormEvent<HTMLInputElement>) => {
    setLat(e.currentTarget.value);
  }

  const changeLonHandler = (e: FormEvent<HTMLInputElement>) => {
    setLon(e.currentTarget.value);
  }

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (lat.trim() === '' || lon.trim() === '') {
      // return dispatch(setAlert('Latitude and Longitude are required!'));
    }
  
    dispatch(setLoading());
    dispatch(getWeather(parseFloat(lat), parseFloat(lon)));
    setLat('');
    setLon('');
  }

  return (
    <div className="hero is-light has-text-centered">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">{title}</h1>
          <form className="py-5" onSubmit={submitHandler}>
            <input
              type="text"
              className="input has-text-centered mb-2"
              placeholder="Enter Latitude"
              style={{ maxWidth: 300 }}
              value={lat}
              onChange={changeLatHandler}
            />
            <input
              type="text"
              className="input has-text-centered mb-2"
              placeholder="Enter Longitude"
              style={{ maxWidth: 300 }}
              value={lon}
              onChange={changeLonHandler}
            />
            <button className="button is-primary is-fullwidth" style={{ maxWidth: 300, margin: '0 auto' }}>Search</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Search;
