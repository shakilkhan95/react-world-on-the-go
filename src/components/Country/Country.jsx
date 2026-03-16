export default function Country ({country}) {
    const {name:{common, official},
            flags:{flags:{png, alt}},
            population:{population}
} = country;
    console.log(common)
    return(
        <div>
            <img src={png} alt={alt}></img>
            <h3>Country name: {common}</h3>
            <p>Official name: {official}</p>
            <p>Population: {population}</p>
        </div>
    )
}