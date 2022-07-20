import React from "react";
import { Link, useParams } from "react-router-dom";
import "./CountryPage.css";
import {FaArrowLeft} from 'react-icons/fa'
import Flags from "../assests/flag.svg";
import { useFetch } from "../../hooks/useFetch";
import Loading from "../loading/Loading";
import {useTheme} from '../../hooks/useTheme'


const CountryPage = () => {
  const { alpha2Code } = useParams();
  const url = `https://restcountries.com/v2/alpha/` + alpha2Code
  const { data, isPending, error } = useFetch(url);
  const {mode} = useTheme()
  // const {flag, name,region, subregion, population, currencies,capital,demonym,languages } = data
  console.log(data);
  return (
    <div className="container">
     {isPending && <Loading/>}
     {error && <div>{error}</div>}
     {data && (
        <div className={`country ${mode}`}>
        <Link to="/" className="country-link">
         <FaArrowLeft/> Back
        </Link>
        <div className="country-page">
          <img src={data.flag} alt="" />
          <div>
            <h2>{data.name}</h2>
            <div className="country_page_list">
              <ul className="country_page_list-item">
                <li>
                  Native Name:<span>{data.name}</span>
                </li>
                <li>
                  Population:<span>{data.population}</span>
                </li>
                <li>
                  Region:<span>{data.region}</span>
                </li>
                <li>
                  Sub Region:<span>{data.subregion}</span>
                </li>
                <li>
                  Capital:<span>{data.capital}</span>
                </li>
              </ul>
              <ul className="country_page_list-item">
                <li>
                  Top Level Domain<span>{data.demonym}</span>
                </li>
                <li>
                  Currencies<span>{data.currencies[0].name}</span>
                </li>
                <li>
                  Languages<span>{data.languages[0].name}</span>
                </li>
              </ul>
            </div>
            <h4 className="country_subtitle">
              Border Countries:{data.borders && data.borders.map((border)=> {
                return(
                  <Link className="country-border" to={`/countryPage/${data.alpha2Code}`} key={border}>
                    {border}
                  </Link>
                )
              })}
              {!data.borders && <div className='country-border'>Sory not border countries</div>}
              
            </h4>
          </div>
        </div>
      </div>
     )}
    </div>
  );
};

export default CountryPage;
