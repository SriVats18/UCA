import React from 'react'

const Home = () => {
    return (
        <>
        <div className='bg-[url("https://i.pinimg.com/564x/39/9b/b4/399bb4bf47aad332a25d4cdcb0fa79b0.jpg")] bg-[length:630px_800px] md:bg-[length:1550px_800px] bg-no-repeat bg-fixed text-white'>
            {/* NAVBAR */}
            <div id='navbar' className='sticky top-0 z-20 rounded-xl backdrop-blur-2xl hover:bg-[#08387B] duration-1000'>
                <ul className='flex justify-around p-4 text-3xl font-bree font-extrabold'>
                    <li className='cursor-pointer hover:scale-150 duration-700'><a href="#main">Home</a></li>
                    <li className='cursor-pointer hover:scale-150 duration-700'><a href="#about">About</a></li>
                    <li className='cursor-pointer hover:scale-150 duration-700'><a href="#content">Analyzers</a></li>
                    <li className='cursor-pointer hover:scale-150 duration-700'><a href="#contact">Contact Us</a></li>
                </ul>
            </div>

            {/* MAIN */}
            <div id='main'className='grid place-content-center h-screen w-full'>
                <h1 className='font-averia uppercase text-center text-7xl md:text-[150px]'>universal comment analyzer</h1>
            </div>
        </div>
        </>
    )
}

export default Home



// BG - bg-[url('https://i.pinimg.com/564x/39/9b/b4/399bb4bf47aad332a25d4cdcb0fa79b0.jpg')]
// BG - https://i.pinimg.com/564x/ee/92/29/ee9229f3bb674eb16ae1ac29c0f6105c.jpg
// border-8 rounded-2xl
// bg-opacity-80 bg-clip-padding blur-backdrop-filter
// bg-opacity-80 scroll-mb-5