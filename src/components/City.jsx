import React from 'react'

const City = ({city}) => {
    console.log(city)
    return (
    <div className='w-96 flex-col border-2 mt-4 mb-0 ml-auto mr-auto rounded bg-stone-200'>
        <h1 className="mt-3 font-bold font text-3xl">{city.main.temp}</h1>
        <h1 className="mt-3 font-medium font text-2xl">{city.name}</h1>
        <h1 className="mt-3 mb-3 font text-xl">{city.weather[0].main}</h1>
    </div>
  )
}

export default City;