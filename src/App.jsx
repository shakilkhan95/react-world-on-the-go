import { Suspense } from 'react';
import './App.css';
import Countries from './components/countries/Countries';

const fetchCountriesData = async() => {
  const res = await fetch('https://openapi.programming-hero.com/api/all');
  return res.json();
}

function App() {

  const countriesDataPromise = fetchCountriesData();

  return (
    <>
      <Suspense fallback={<h4>Countries are loading...</h4>}>
        <Countries countriesDataPromise={countriesDataPromise}></Countries>
      </Suspense>
    </>
  )
}

export default App
