import React, { useState } from "react";
import { BiCurrentLocation } from "react-icons/bi";
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
          <div>
            <AiOutlineClose onClick={showOnSearch} />
          </div>
          <div className="relative">
            {" "}
            <AiOutlineSearch
              size={35}
              color={"white"}
              className="absolute inset-1 inset-x-4"
            />
            <div className="flex justify-around">
              <input
                className="block w-3/5 py-2 bg-gray-800"
                onClick={showOnSearch}
                placeholder="         search location"
              />
              <button className="w-3/12 text-xl font-medium text-white capitalize bg-blue-600">
                search
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between bg-gray-900">
            <input
              onClick={showOnSearch}
              className="p-3 my-3 ml-3 placeholder-white bg-gray-500 focus:outline-none w-44"
              placeholder="Search for places"
            />
            <div className="mr-3">
              <BiCurrentLocation />
            </div>
          </div>
        </>
      )}
    </>
  );
}
