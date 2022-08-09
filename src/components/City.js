import React from 'react'

const City = ({city}) => {
    return (
    <div className='container mx-auto'>
      <div className='w-[400px] h-[300px] pt-10 flex-col border-2 ml-auto mr-auto rounded-lg bg-stone-500 bg-opacity-20 text-white hover:border-yellow-200'>
          <div className='flex flex-col'>
            <h3 className='text-sm text-yellow-200'>Sıcaklık</h3>
              <h1 className="mb-8 font-bold font text-4xl">{city.main.temp}°</h1>
            <h3 className='text-sm text-yellow-200'>Şehir</h3>
              <h1 className="mb-8 font-medium font text-2xl">{city.name}</h1>
            <h3 className='text-sm text-yellow-200'>Durum</h3>
              <h1 className="font text-xl">{city.weather[0].main}</h1>
          </div>
      </div>
    </div>
  )
}

export default City;
