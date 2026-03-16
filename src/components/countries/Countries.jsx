import React, { use } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = ({countriesDataPromise}) => {
    const countriesData = use(countriesDataPromise);
    const countries = countriesData.countries;
    
    return (
        <div>
            <h3>In the Countries</h3>
            <div className='countries'>
                {
                    countries.map(country => <Country key={country.ccn3.ccn3} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;