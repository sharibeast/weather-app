import React from "react";

export default function Day() {
  return (
    <div className="flex flex-col items-center bg-blue-900">
      <p className="text-xl">Humidity</p>
      <h1 className="text-3xl font-bold">80%</h1>
      <div>
        <input type="range" min="1" max="10" />
      </div>
    </div>
  );
}
