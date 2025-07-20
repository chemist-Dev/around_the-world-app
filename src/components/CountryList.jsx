import React from "react";
import CountryCard from "./CountryCard";
import EmptySearch from "./EmptySearch";

const CountryList = ({ data }) => {
  return (
    <div className="mx-auto mt-6 grid grid-cols-1 justify-between gap-3 md:grid-cols-2 lg:grid-cols-4">
      {data && data.length ? (
        data.map((country) => {
          return (
            <CountryCard
              key={country.name.official}
              name={country.name.common}
              population={country.population}
              region={country.region}
              flag={country.flags.svg}
              capital={country.capital}
            />
          );
        })
      ) : (
        <EmptySearch />
      )}
    </div>
  );
};

export default CountryList;
