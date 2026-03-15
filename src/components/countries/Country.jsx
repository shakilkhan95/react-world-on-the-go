export default function Country ({country}) {
    const {name:{common, official}} = country;
    console.log(common)
    return(
        <div>
            <h3>Country name: {common}</h3>
            <p>Official name: {official}</p>
        </div>
    )
}