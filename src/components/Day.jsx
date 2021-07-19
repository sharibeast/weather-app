import React from "react";
import rain from "../assets/rainy-3.svg";

export default function Day() {
  return (
    <div className="flex flex-col items-center bg-blue-900">
      <p>Tomorrow</p>
      <object aria-label="svg" type="image/svg+xml" data={rain} />
      <div>
        <span>16C</span>
        <span>11C</span>
      </div>
    </div>
  );
}
