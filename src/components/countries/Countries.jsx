import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = ({countriesDataPromise}) => {
    const countriesData = use(countriesDataPromise);
    const countries = countriesData.countries;

    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedCountriesFlags, setVisitedCountriesFlags] = useState([]);

    const handleVisitedCountries = (country) => {
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedCountriesFlag = (svg) => {
        const newVisitedCountriesFlags = [...visitedCountriesFlags, svg];
        setVisitedCountriesFlags(newVisitedCountriesFlags);
    }
    
    return (
        <div>
            <h3>In the Countries: {countries.length}</h3>
            <h4>Total visited countries: {visitedCountries.length}</h4>
            <ol>
                {
                    visitedCountries.map(countries => <li key={countries.ccn3.ccn3}>{countries.name.common}</li>)
                }
            </ol>

            <div className='visited-countries-flags-container'>
                {
                    visitedCountriesFlags.map((flag, index) => <img key={index} src={flag}></img>)
                }
            </div>

            <div className='countries'>
                {
                    countries.map(country => <Country 
                        key={country.ccn3.ccn3} 
                        country={country}
                        handleVisitedCountries={handleVisitedCountries}
                        handleVisitedCountriesFlag={handleVisitedCountriesFlag}>
                    </Country>)
                }
            </div>
        </div>
    );
};

export default Countries;