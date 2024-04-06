import React from 'react'

const Content = () => {
  return (
    <>
    <div className='bg-[url("https://i.pinimg.com/564x/39/9b/b4/399bb4bf47aad332a25d4cdcb0fa79b0.jpg")] bg-[length:630px_800px] bg-fixed bg-no-repeat text-white md:bg-[length:1550px_800px]'>
      <div id='title1' className='sticky top-0 z-20 rounded-xl backdrop-blur-2xl hover:bg-[#08387B] duration-1000'>
        <h2 className='font-popin uppercase p-4 text-center text-5xl md:text-7xl'>Analyzers</h2>
      </div>

      <div id='content' className='flex h-screen w-full flex-row items-center justify-around p-4 font-ubuntu text-2xl md:text-4xl'>
        <div className='grid place-content-center h-screen w-full hover:bg-slate-800/60 duration-1000'><h3 className='text-center'>WhatsApp</h3></div>
        <div className='grid place-content-center h-screen w-full hover:bg-slate-800/60 duration-1000'><h3 className='text-center'>YouTube</h3></div>
        <div className='grid place-content-center h-screen w-full hover:bg-slate-800/60 duration-1000'><h3 className='text-center'>Instagram</h3></div>
        <div className='grid place-content-center h-screen w-full hover:bg-slate-800/60 duration-1000'><h3 className='text-center'>Twitter</h3></div>
      </div>
    </div>
    </>
  )
}

export default Content

{/* <div className='h-lvh w-full  flex flex-col text-center bg-gradient-to-r from-violet-500 to-fuchsia-500  px-32'>
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
</div> */}

{/* <div className='bg-[url("https://i.pinimg.com/564x/39/9b/b4/399bb4bf47aad332a25d4cdcb0fa79b0.jpg")] bg-[length:630px_800px] md:bg-[length:1550px_800px] bg-no-repeat bg-fixed text-white'>
  <ul className='flex flex-row justify-around p-4 text-xl font-ubuntu md:font-popin'>
    <li>WhatsApp</li>
    <li>YouTube</li>
    <li>Instagram</li>
    <li>Twitter</li>
  </ul>
</div> */}