import React from "react";
import { Link } from "react-router-dom";

const CountryCard = ({ name, flag, population, capital, region }) => {
  return (
    <Link to={name}>
      <div className="mx-auto mt-4 flex h-full w-full max-w-xs flex-col rounded-xl bg-gray-50 p-3 pb-6 shadow-md transition-transform duration-200 hover:scale-105 sm:mt-6 md:max-w-sm xl:max-w-[264px] dark:bg-gray-800 dark:text-white">
        <img
          src={flag}
          alt="placeholder"
          className="mb-4 h-40 rounded-md"
          loading="lazy"
        />
        <h2 className="mb-4 ml-3 text-lg font-extrabold">{name}</h2>
        <div className="ml-3 flex flex-col gap-2">
          <p>
            <span className="font-semibold">Population: </span>
            <span className="font-light"> {population}</span>
          </p>
          <p>
            <span className="font-semibold">Region: </span>
            <span className="font-light">{region} </span>
          </p>
          <p>
            <span className="font-semibold">Capital: </span>
            <span className="font-light">{capital} </span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
