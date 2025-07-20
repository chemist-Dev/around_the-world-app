import React from "react";
import { useParams, Link } from "react-router-dom";
import { useFetchDate } from "../useFetchDate";
import Loading from "../components/Loading";

const Country = () => {
  const { country } = useParams();
  const { results, isError, isLoading } = useFetchDate(country);
  return (
    <>
      {isLoading && <Loading />}
      {isError && <ShowMessage message={"Something Went wrong...!"} />}
      {!isLoading && !isError && (
        <div className="mx-6 rounded-2xl from-gray-700 to-gray-900 p-20 px-3 lg:px-6 lg:py-6 dark:bg-linear-to-r">
          <Link
            to="/"
            className="mb-16 inline-block rounded-md bg-white p-3 md:mb-20"
          >
            <svg
              width="19"
              height="13"
              viewBox="0 0 19 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.89269 0.535534L7.0712 1.71405L3.18211 5.60313L18.0314 5.60313L18.0314 7.25305L3.18211 7.25305L7.0712 11.1421L5.89269 12.3206L0.000132627 6.42809L5.89269 0.535534Z"
                fill="#111827"
              />
            </svg>
          </Link>
          <div className="grid grid-cols-1 gap-11 md:grid-cols-2 lg:gap-36">
            <img
              src={results?.flags?.svg}
              alt={results?.flags?.svg}
              className="rounded-xl lg:w-[400px]"
            />
            <div>
              <h1 className="mb-4 text-3xl font-extrabold lg:mb-7">
                {" "}
                {results?.name?.common}
              </h1>
              <div className="flex flex-col gap-10 md:gap-40 lg:flex-row">
                <div>
                  <p>
                    <span className="font-semibold">Native Name: </span>
                    <span className="font-light">{results?.name?.common}</span>
                  </p>
                  <p>
                    <span className="font-semibold">Population: </span>
                    <span className="font-light">
                      {" "}
                      {parseInt(results?.population).toLocaleString()}
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold">Region: </span>
                    <span className="font-light"> {results?.region}</span>
                  </p>
                  <p>
                    <span className="font-semibold">Capital: </span>
                    <span className="font-light"> {results?.capital}</span>
                  </p>
                  <p>
                    <span className="font-semibold">Sub Region: </span>
                    <span className="font-light"> {results?.region}</span>
                  </p>
                </div>
                <div>
                  <p>
                    <span className="font-semibold">Top Level Domain: </span>
                    <span className="font-light">
                      {results.tld?.join(", ")}
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold">Currencies: </span>
                    <span className="font-light">
                      {results?.currencies &&
                        Object.keys(results.currencies)
                          .map(
                            (currency) =>
                              `${results?.currencies[currency].name}`,
                          )
                          .join(", ")}
                      ,
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold">Languages: </span>
                    <span className="font-light">
                      {results?.languages &&
                        Object.values(results.languages)
                          .map((lang) => `${lang}`)
                          .join(", ")}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Country;
