import React, {useState} from "react";

function MyComponent(){

  const [car, setCar] = useState({year: 2021, 
                                  make: "Hyundai", 
                                  model: "Veloster N"}) //setting the default state to be an object with the given key: value pairs
  
  function handleYearChange(e){
    setCar(prevCar => ({...prevCar, year: e.target.value})) //spreads all the properties of the car object and add an year as just using the year property replaces the entire object with just that and it results in make and model not being printed. i.e., use spread operator so changing one value does not affect the other values.
    // We use an arrow function(updater function) as it is recommended to do so instead of setting the state directly and prevCar as an abbreviation of "car" as it is good practice to use a different name
  }
  function handleMakeChange(e){
    setCar(prevCar => ({...prevCar, make: e.target.value}))
  }
  function handleModelChange(e){
    setCar(prevCar => ({...prevCar, model: e.target.value}))
  }

  return(
    <div>
      <p>Your favorite car is a {car.year} {car.make} {car.model}</p>
      <input type="number" value={car.year} onChange={handleYearChange}/><br />
      <input type="text" value={car.make} onChange={handleMakeChange}/><br />
      <input type="text" value={car.model} onChange={handleModelChange}/><br />
    </div>
  )
}

export default MyComponent