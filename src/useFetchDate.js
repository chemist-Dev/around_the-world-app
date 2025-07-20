import React, { useEffect } from "react";
import { useState } from "react";

export const useFetchDate = (country) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [results, setresults] = useState([]);
  const [filterdCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        setIsLoading(true);

        // Check if we have cached data
        const cachedData = localStorage.getItem(
          country ? `country-${country}` : "all-countries",
        );

        if (cachedData) {
          const parsedData = JSON.parse(cachedData);
          const cacheTime = parsedData.timestamp;
          const now = new Date().getTime();

          // Check if cache is less than 24 hours old
          if (now - cacheTime < 24 * 60 * 60 * 1000) {
            if (country) {
              setresults(parsedData.data);
            } else {
              setresults(parsedData.data);
              setFilteredCountries(parsedData.data);
            }
            setIsLoading(false);
            return;
          }
        }

        // If no cache or cache expired, fetch from API
        let apiUrl =
          "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,currencies,tld,languages";
        if (country) {
          apiUrl = `https://restcountries.com/v3.1/name/${country}?fields=name,flags,population,region,capital,currencies,tld,languages`;
        }

        const response = await fetch(apiUrl);
        const data = await response.json();

        // Cache the new data
        const cacheData = {
          data: country ? data[0] : data,
          timestamp: new Date().getTime(),
        };
        localStorage.setItem(
          country ? `country-${country}` : "all-countries",
          JSON.stringify(cacheData),
        );

        if (country) {
          setresults(data[0]);
        } else {
          setresults(data);
          setFilteredCountries(data);
        }
      } catch (error) {
        setIsError(true);
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDataFromApi();
  }, [country]);

  return {
    results,
    filterdCountries,
    isLoading,
    isError,
    setFilteredCountries,
  };
};
