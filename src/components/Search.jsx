import React, { useState, useEffect } from 'react';
import { TiLocation } from 'react-icons/ti';
import { BiCurrentLocation } from 'react-icons/bi';
import Svg from '../assets/rainy-3.svg';
import axios from 'axios';
export default function Search() {
  const handleSearch = () => setShowSearch(!showSearch);
  const [showSearch, setShowSearch] = useState(false);
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);

  const fetchLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setLat(pos.coords.latitude);
      setLong(pos.coords.longitude);
    });
  };

  const fetchWeather = async () => {
    const response = await axios.get(
      //cors-anywhere.herokuapp.com/https://www.metaweather.com/api
      `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=${lat[0]},${long[0]}`,
    );
    console.log(response.data);
  };

  useEffect(() => {
    fetchLocation();
    console.log('latitude', lat);
    console.log('longitude', long);
    fetchWeather();
  });

  return (
    <div className="p-3 text-white md:w-2/5">
      {showSearch ? (
        <>
          <div>
            <form>
              <input
                className="w-3/4 p-2 mr-2 text-red-500"
                placeholder="search location"
                list="cities"
                // ref={inputCity}
              />
              <button className="w-1/5 p-2 bg-blue-600 ">search</button>
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
