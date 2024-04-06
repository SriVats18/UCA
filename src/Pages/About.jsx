import React from 'react'

const About = () => {
  return (
    <>
    <div className='bg-[url("https://i.pinimg.com/564x/39/9b/b4/399bb4bf47aad332a25d4cdcb0fa79b0.jpg")] bg-[length:630px_800px] md:bg-[length:1550px_800px] bg-no-repeat bg-fixed text-white'>
      <div id='title2' className='sticky top-0 z-20 rounded-xl backdrop-blur-2xl hover:bg-[#08387B] duration-1000'>
        <h2 className='font-popin uppercase p-4 text-center text-5xl md:text-7xl'>about</h2>
      </div>

      <div id='about'className='grid place-content-center h-screen w-full'>
        <p className='font-ubuntu px-4 text-center text-3xl md:text-5xl'>
        The Universal Comment Analyzer leverages advanced Natural Language Processing and Machine Learning to offer deep insights into social media discourse. Designed for a wide array of platforms like WhatsApp, YouTube, Instagram and Twitter, it features sentiment analysis, spam detection, and trend identification. This tool empowers users with a nuanced understanding of public sentiment and online trends, transforming complex data into actionable insights.
        </p>
      </div>
    </div>
    </>
  )
}

export default About