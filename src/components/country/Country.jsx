import React from "react";
import "./Country.css";
import Flag from "../assests/flag.svg";
import { Link } from "react-router-dom";
import Loading from "../loading/Loading";
import { useTheme } from "../../hooks/useTheme";

const Country = ({countries, isLoading, error}) => {
  
  const {mode} = useTheme()
  return (
    <div className={`card ${mode}`}>
      {isLoading && <Loading/>}
      {error && <div>{error}</div>}
    {countries && countries.map((count) => {
      return(
        <div className="card-item" key={count.name }>
        <img src={count.flag} alt="" />
        <div className="card-body">
          <h2>{count.name}</h2>
          <ul className="card-list">
            <li>
              Population: <span>{count.population}</span>
            </li>
            <li>
              Region: <span>{count.region}</span>
            </li>
            <li>
              Capital: <span>{count.capital}</span>
            </li>
          </ul>
          <Link to={`/countryPage/${count.alpha2Code}`} className="card-btn">Read More</Link>
        </div>
      </div>
      )
    })}
      
    </div>
  );
};

export default Country;
