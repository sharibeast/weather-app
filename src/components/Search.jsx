import React from "react";
import { TiLocation } from "react-icons/ti";
import { BiCurrentLocation, BiCloudLightning } from "react-icons/bi";
import Svg from "../assets/rainy-3.svg";
export default function Search() {
  return (
    <div className="p-3 text-white md:w-2/5">
      <div className="flex justify-around md:justify-between">
        <input type="text" placeholder="search for places" />
        <div>
          <BiCurrentLocation color={"white"} />
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
    </div>
  );
}
