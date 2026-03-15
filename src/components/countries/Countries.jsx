import React, { use } from 'react';
import Country from './Country';

const Countries = ({countriesDataPromise}) => {
    const countriesData = use(countriesDataPromise);
    const countries = countriesData.countries;
    
    return (
        <div>
            <h3>In the Countries</h3>
            {
                countries.map(country => <Country key={country.ccn3.ccn3} country={country}></Country>)
            }
        </div>
    );
};

export default Countries;