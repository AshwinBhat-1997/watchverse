import React from "react";
import logo from "../assets/tv.png";
import SearchBar from "./searchBar";

const navbar = () => {
  return (
    <nav className="min-h-[10vh] grid grid-cols-12 gap-2 py-5">
      <div className="nav-left col-span-12 md:col-span-6 flex items-center justify-center space-x-3 md:space-x-5">
        <img src={logo} alt="tv-image" className="h-8 md:h-12" />
        <h1 className="font-bold text-3xl md:text-4xl text-white">
          Watch<span className="text-blue-400">Verse</span>
        </h1>
      </div>
      <div className="nav-right col-span-12 md:col-span-6 flex items-center justify-center">
        <SearchBar />
      </div>
    </nav>
  );
};

export default navbar;
