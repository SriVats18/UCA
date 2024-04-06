import React from 'react'
import Card from '../Components/Card'

const Content = () => {
  return (
    <>
        <div className='h-lvh w-full  flex flex-col text-center bg-gradient-to-r from-violet-500 to-fuchsia-500  px-32'>
          <div className='my-10 relative  w-max mx-auto py-5'>
            <h1 className='font-popin text-4xl pb-2'>Social Media Analyzer</h1>
            <span className='absolute left-0 w-full h-2 bg-[#800080bb] shadow-xl'></span>
          </div>

          <div className=' mx-auto flex flex-wrap justify-center px-32 py-5 gap-20 text-white'>
            <Card title="WhatsApp" url="/images/whatsapp.jpg"/>
            <Card title="Youtube" url="/images/youtube.jpg"/>
            <Card title="Instagram" url="/images/instagram.jpg"/>
            <Card title="Twitter" url="/images/twitter.jpg"/>
          </div>
        </div>
    </>
  )
}

export default Content