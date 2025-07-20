import React from "react";
import Select from "react-select";

const RegionMenu = ({ countrieslist, filterdCountriesList }) => {
  const options = [
    { value: "all regions", label: "All regions" },
    { value: "africa", label: "Africa" },
    { value: "europe", label: "Europe" },
    { value: "asia", label: "Asia" },
    { value: "america", label: "Americas" },
    { value: "oceania", label: "Oceania" },
    { value: "antarcatic", label: "Antarctic" },
  ];
  function handleRegionChange(e) {
    const region = e.label;
    console.log(region);
    const filterdCountries =
      region === "All regions"
        ? countrieslist
        : countrieslist.filter((country) => country.region === region);
    filterdCountriesList(filterdCountries);
  }

  return (
    <>
      <Select
        options={options}
        onChange={handleRegionChange}
        defaultValue={options[0]}
        className="w-full max-w-xs md:max-w-sm lg:max-w-[264px]"
        classNames={{
          input: () => "dark:text-gray-100 text-gray-900",
          singleValue: () => "dark:text-gray-100 text-gray-900",
          control: () =>
            "flex h-12 items-center justify-between rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 pl-4 pr-2 shadow md:h-14 transition-colors",
          indicatorSeparator: () => "hidden",
          option: ({ isFocused, isSelected }) =>
            [
              "cursor-pointer px-4 py-2",
              isSelected
                ? "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                : isFocused
                  ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  : "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100",
            ].join(" "),
          menu: () =>
            "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 mt-2 rounded-md shadow-lg",
        }}
      />
    </>
  );
};

export default RegionMenu;
