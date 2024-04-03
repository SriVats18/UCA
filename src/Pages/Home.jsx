import React from 'react'

const Home = () => {
    return (
        <>
        <div className='h-lvh w-full bg-[url("./Assets/bg.png")] bg-no-repeat bg-cover'>
            {/* NAVBAR */}
            <div id='navbar' className='py-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded sticky top-0 z-20'>
                <ul className='font-popin flex justify-evenly'>
                    <li className='cursor-pointer hover:scale-125 duration-700'>WhatsApp</li>
                    <li className='cursor-pointer hover:scale-125 duration-700'>YouTube</li>
                    <li className='cursor-pointer hover:scale-125 duration-700'>Instagram</li>
                    <li className='cursor-pointer hover:scale-125 duration-700'>Twitter</li>
                    <li className='cursor-pointer hover:scale-125 duration-700'>About</li>
                </ul>
            </div>

            {/* MAIN */}
            <div id='main' className='relative'>
                <h1 className='font-popin text-white text-9xl absolute top-48 left-80'>UNIVERSAL COMMENT ANALYZER</h1>
            </div>
        </div>
        </>
    )
}

export default Home