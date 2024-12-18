import React from "react";

const searchBar = () => {
  return (
    <div className="relative w-[90%] md:w-3/4 xl:w-1/2 my-2 md:my-0">
      <label htmlFor="Search" className="sr-only">
        Search movies, series ...
      </label>
      <input
        type="text"
        id="Search"
        placeholder=" Search movies, series ..."
        className="w-full rounded-md bg-transparent border border-gray-200 ps-2 py-2.5 pe-10 shadow-sm sm:text-sm outline-none focus:border-none text-white focus:outline-blue-400"
      />
      <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
        <button
          type="button"
          className="text-gray-600 hover:text-gray-700 outline-none"
        >
          <span className="sr-only">Search</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </span>
    </div>
  );
};

export default searchBar;
