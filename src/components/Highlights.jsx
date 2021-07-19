import React from "react";
import Day from "./Day";
import Wind from "./Wind";
import Humidity from "./Humidity";
import Visibility from "./Visibility";
import AirPressure from "./AirPressure";

export default function Highlights() {
  return (
    <div className="bg-gray-900 p-14 md:w-3/5 ">
      <div className="grid grid-cols-2 gap-6 mb-8 md:grid-cols-5 md:gap-y-8 md:mb-20">
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
      </div>

      {/* today's highlight */}
      <h1 className="mb-8 text-3xl font-bold">Today's highlights</h1>
      <div className="grid w-full grid-cols-1 gap-y-8 md:gap-4 md:grid-cols-2">
        <Wind />
        <Humidity />
        <Visibility />
        <AirPressure />
      </div>
    </div>
  );
}
