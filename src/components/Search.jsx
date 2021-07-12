import React from "react";
import { BiCurrentLocation } from "react-icons/bi";

export default function Search() {
  return (
    <div className="flex items-center justify-between bg-gray-900">
      <div className="shadow-lg">
        <input
          className="p-3 my-3 ml-3 placeholder-white bg-gray-500 focus:outline-none w-44"
          placeholder="Search for places"
        />
      </div>
      <div className="mr-3">
        <BiCurrentLocation />
      </div>
    </div>
  );
}
