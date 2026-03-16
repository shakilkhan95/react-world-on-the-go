import { useState } from 'react';
import './Country.css';

export default function Country ({country}) {
    const {name:{common, official},
            flags:{flags:{svg, alt}},
            population:{population},
            area:{area}
} = country;

const [visited, setVisited] = useState(false);
//event handler for button
const handleVisited = () => {
    setVisited(!visited)
}

const width = {width: '340px', height: "200px"}

    return(
        <div className={`country ${visited && 'country-visited'}`}>
            <div><img style={width} src={svg} alt={alt}></img></div>
            <h3>Country name: {common}</h3>
            <p>Official name: {official}</p>
            <p>Population: {population}</p>
            <p>{area}km {area > 300000 ? "(Big country)" : "(Small country)"}</p>
            <button onClick={handleVisited}>{visited ? "Visited" : "Not Visited"}</button>
        </div>
    )
}