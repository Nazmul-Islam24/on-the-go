import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries, handleVisitedFlag }) => {
  const [visited, setVisited] = useState(false);
  //   console.log(country);
  console.log(handleVisitedCountries);

  const handleVisited = () => {
    // if(visited){
    //     setVisited(false)
    // }
    // else{
    //     setVisited(true)
    // }

    setVisited(visited ? false : true);
    handleVisitedCountries(country);
  };

  return (
    <div
      className={`country border-lg text-center ${visited ? "country-visited" : "country-not-visited"}`}
    >
      <h3>Name: {country.name.common}</h3>
      <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
      <p>Population: {country.population.population}</p>
      <p>
        Area: {country.area.area}{" "}
        {country.area.area > 30000 ? "Big Country" : "Small country"}
      </p>
      <button className={"button"} onClick={handleVisited}>
        {visited ? "Visited" : "Not Visited"}
      </button>
      <button
        className={"button"}
        onClick={() => {
          handleVisitedFlag(country?.flags?.flags?.png);
        }}
      >
        Add Visited Flag
      </button>
    </div>
  );
};

export default Country;
