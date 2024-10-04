export default function CountryDetail(props:{name:string, capital:string, population:number}) {
    console.log(props)


 
    return (
        <div>
       <h1>Name: {props.name}</h1>
   <h1>Capital: {props.capital}</h1>
   <h1>population: {props.population} </h1>    
        </div>
    )
}