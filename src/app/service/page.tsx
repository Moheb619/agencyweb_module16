import React from 'react'

interface Props {}

const page = async() => {

  const res = await fetch('https://agency.teamrabbil.com/api/AllService')
  const data = await res.json()

  return (
    <div className='py-20 px-10 space-y-8' >
      <div className='space-y-8'>
        <h1 className='text-5xl font-bold'>SERVICES</h1>
        <p>Home {">"} <span className='text-green-500'>Services</span></p>
      </div>
      <div className='space-y-2'>
        <h1 className='text-2xl font-bold text-green-500'>OUR ALL SERVICES</h1>
        <p className='font-bold'>We Provide BestWeb Design Services</p>
        <div className='flex pt-20 justify-center flex-wrap gap-8'>
          {data.slice(0,4).map((item: any) => (
            <div className='flex shadow-xl rounded-lg p-3 flex-col space-y-4 items-center pt-10'>
              <p className='text-xl font-bold'>{item.title}</p>
              <p className='break-words w-[450px] text-start'>{ item.des }</p>
              <div className='grid grid-cols-2 gap-8'>
                <img className='w-[12rem] h-[12rem] rounded-md' alt='' src={item.image1} />
                <img className='w-[12rem] h-[12rem] rounded-md' alt='' src={item.image2} />
                <img className='w-[12rem] h-[12rem] rounded-md' alt='' src={item.image3} />
                <img className='w-[12rem] h-[12rem] rounded-md' alt='' src={item.image4} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default page