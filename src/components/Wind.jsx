import React from "react";

export default function Day() {
  return (
    <div className="flex flex-col items-center bg-blue-900">
      <p className="text-xl">Wind status</p>
      <h1 className="text-3xl font-bold">7mph</h1>
      <div>
        <span>Icon</span>
        <span>wsw</span>
      </div>
    </div>
  );
}
