import React, { useState } from "react";
import { BiCurrentLocation, BiCloudLightning } from "react-icons/bi";
import { TiLocation } from "react-icons/ti";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";

export default function Search() {
  const [show, setShow] = useState(false);
  const showOnSearch = () => {
    console.log("clicked");
    setShow(!show);
  };
  return (
    <>
      {show ? (
        <div className="bg-gray-900 h-96">
          <div className="">
            <AiOutlineClose color={"white"} size={50} onClick={showOnSearch} />
          </div>
          <div className="relative">
            <AiOutlineSearch
              size={35}
              color={""}
              className="absolute inset-1 inset-x-4"
            />
            <div className="flex justify-around">
              <input
                list="cities"
                className="block w-3/5 py-2 bg-gray-800"
                placeholder="         search location"
              />
              <button className="w-3/12 text-xl font-medium text-white capitalize bg-blue-600">
                search
              </button>
            </div>
            <datalist id="cities">
              <option value="dar es salaam" />
              <option value="Arusha" />
              <option value="Moshi" />
            </datalist>
          </div>
        </div>
      ) : (
        <div className="pb-20 bg-gray-900">
          <div className="flex items-center justify-between">
            <input
              onClick={showOnSearch}
              className="p-3 my-3 ml-3 placeholder-white bg-gray-500 focus:outline-none w-44"
              placeholder="Search for places"
            />
            <div className="mr-3">
              <BiCurrentLocation color={"white"} />
            </div>
          </div>
          <div className="flex flex-col items-center text-white">
            <div className="">
              <BiCloudLightning size={200} />
            </div>
            <p className="font-semibold text-9xl">15C</p>
            <p className="text-3xl">shower</p>
            <div className="flex">
              <p className="mr-8">Today</p>
              <p>Friday,5 June</p>
            </div>
            <p>
              <TiLocation />
              Location
            </p>
          </div>
        </div>
      )}
    </>
  );
}
