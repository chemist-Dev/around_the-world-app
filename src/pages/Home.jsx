import React from "react";
import SearchInput from "../components/SearchInput";
import CountryList from "../components/CountryList";
import RegionMenu from "../components/RegionMenu";
import ShowMessage from "../components/ShowMessage";
import Loading from "../components/Loading";
import { useFetchDate } from "../useFetchDate";

const Home = () => {
  const {
    countrieslist,
    isError,
    filterdCountries,
    isLoading,
    setFilteredCountries,
  } = useFetchDate();

  return (
    <div>
      {isLoading && <Loading />}
      {isError && <ShowMessage message={"Something Went wrong...!"} />}
      {!isLoading && !isError && (
        <>
          <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:gap-6 md:px-8 xl:justify-around">
            <SearchInput
              countrieslist={countrieslist}
              filterdCountriesList={setFilteredCountries}
            />
            <RegionMenu
              countrieslist={countrieslist}
              filterdCountriesList={setFilteredCountries}
            />
          </div>
          <CountryList data={filterdCountries} />
        </>
      )}
    </div>
  );
};

export default Home;
