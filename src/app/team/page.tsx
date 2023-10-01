import React from 'react'

interface Props {}

const page = async() => {

  const res = await fetch('https://agency.teamrabbil.com/api/TeamList')
  const data = await res.json()

  return (
    <div className='py-20 px-10 space-y-8' >
      <div className='space-y-8'>
        <h1 className='text-5xl font-bold'>TEAM</h1>
        <p>Home {">"} <span className='text-green-500'>Team</span></p>
      </div>
      <div className='space-y-2'>
        <h1 className='text-2xl font-bold text-green-500'>OUR TEAM MEMBERS</h1>
        <p className='font-bold'>Check our awesome team members</p>
        <div className='flex pt-20 justify-center flex-wrap gap-8'>
          {data.slice(0,3).map((item: any) => (
            <div className='flex shadow-xl rounded-lg py-4 flex-col space-y-4 items-center pt-10'>
              <img className='w-[19rem] h-[19rem] rounded-md' alt='' src={item.image} />
              <p className='text-xl font-bold'>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default page