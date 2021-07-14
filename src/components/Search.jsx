import React from "react";
import { TiLocation } from "react-icons/ti";
import { BiCurrentLocation, BiCloudLightning } from "react-icons/bi";
import Svg from "../assets/rainy-3.svg";
export default function Search() {
  return (
    <div className="text-white md:w-full">
      <div className="flex justify-around sm:justify-between">
        <input type="text" placeholder="search for places" />
        <div>
          <BiCurrentLocation color={"white"} />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <object type="image/svg+xml" data={Svg} />
        <p className="text-3xl font-semibold">15°C</p>
        <p className="text-lg">shower</p>
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
