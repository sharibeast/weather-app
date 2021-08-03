import React, { useState, useEffect, useRef } from 'react';
import { TiLocation } from 'react-icons/ti';
import { BiCurrentLocation } from 'react-icons/bi';
import Svg from '../assets/rainy-3.svg';
import axios from 'axios';
export default function Search() {
  const handleSearch = () => setShowSearch(!showSearch);
  const [showSearch, setShowSearch] = useState(false);
  const [location, setLocation] = useState('');
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [woeid, setWoeid] = useState(null);

  const API = 'https://www.metaweather.com/api/location/search/?query=';
  const axiosClient = axios.create();
  axiosClient.defaults.baseURL = `${API}`;
  axiosClient.defaults.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  // all request will wait 2seconds before timeout
  axiosClient.defaults.timeout = 2000;
  axiosClient.defaults.withCredentials = true;

  // end of the axios setup
  const refContainer = useRef();

  const fetchID = () => {
    return axiosClient
      .get(
        `https://www.metaweather.com/api/location/search/?query=${location}.`,
      )
      .then((res) => console.log('hiii', res.data));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
    setLocation(refContainer.current.value);
  };

  useEffect(() => {
    fetchID();
  }, [fetchID]);

  return (
    <div className="p-3 text-white md:w-2/5">
      {showSearch ? (
        <>
          <div>
            <form onSubmit={handleSubmit}>
              <input
                className="w-3/4 p-2 mr-2 text-red-500"
                placeholder="search location"
                list="cities"
                ref={refContainer}
                // tCijuoefgdfjkvsdkvisduvsdvbsdibi
                // this is the story of my life as am trying to be the best developer so i can help my family
              />
              <button type="submit" className="w-1/5 p-2 bg-blue-600 ">
                search
              </button>
            </form>
            <datalist id="cities">
              <option value="London" />
              <option value="Barcelona" />
              <option value="Long beach" />
            </datalist>
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-around md:justify-between">
            <input
              type="text"
              onClick={handleSearch}
              className="p-2"
              placeholder="search for places"
            />
            <div className="bg-gray-400 rounded-full ">
              <BiCurrentLocation color={'white'} size={40} />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <object aria-label="svg" type="image/svg+xml" data={Svg} />
            <p className="mb-4 font-semibold text-7xl">15°C</p>
            <p className="mb-4 text-2xl">shower</p>
            <div>
              <span className="mr-3">Today</span>
              <span>Fri, 5 June</span>
            </div>
            <div className="flex">
              <span>
                <TiLocation />
              </span>
              <span>Helsinki</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
