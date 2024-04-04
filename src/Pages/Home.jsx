import React from 'react'

const Home = () => {
    return (
        <>
        <div className='h-lvh w-full bg-[url("./Assets/bg2.png")] bg-no-repeat bg-cover'>
            {/* NAVBAR */}
            <div id='navbar' className='py-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded sticky top-0 z-20 bg-clip-text-sm backdrop-blur'>
                <ul className='font-popin flex justify-evenly'>
                    <li className='cursor-pointer hover:scale-125 duration-700'>WhatsApp</li>
                    <li className='cursor-pointer hover:scale-125 duration-700'>YouTube</li>
                    <li className='cursor-pointer hover:scale-125 duration-700'>Instagram</li>
                    <li className='cursor-pointer hover:scale-125 duration-700'>Twitter</li>
                    <li className='cursor-pointer hover:scale-125 duration-700'>About</li>
                </ul>
            </div>

            {/* MAIN */}
            <div id='main' className='relative grid place-content-center h-screen'>
                <h1 className='font-popin text-white text-9xl absolute top-48 left-80'>UNIVERSAL COMMENT ANALYZER</h1>
            </div>
        </div>
        </>
    )
}

export default Home

















// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="IE=edge">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Play</title>
// </head>
// <body>
//   <div class="h-lvh w-full bg-[url('https://img.freepik.com/free-vector/colorful-abstract-background_23-2148463929.jpg')] bg-no-repeat bg-cover">
//     <!-- NAVBAR -->
//     <div id="navbar" class="py-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded sticky top-0 z-20 bg-opacity-80 scroll-mb-5 bg-clip-text-sm backdrop-blur">
//       <ul class="font-popin flex justify-evenly">
//         <li class="cursor-pointer hover:scale-125 duration-700">WhatsApp</li>
//         <li class="cursor-pointer hover:scale-125 duration-700">YouTube</li>
//         <li class="cursor-pointer hover:scale-125 duration-700">Instagram</li>
//         <li class="cursor-pointer hover:scale-125 duration-700">Twitter</li>
//         <li class="cursor-pointer hover:scale-125 duration-700">About</li>
//       </ul>
//     </div>

//     <!-- MAIN -->
//     <div id="main" class="relative grid place-content-center h-screen">
//       <h1 class="font-popin text-white text-9xl absolute top-48 left-80 uppercase">universal comment analyzer</h1>
//     </div>
//   </div>
// </body>
// </html>

// <!-- import React from 'react'

// const Home = () => {
//     return (
//         <>
//         <div className='h-lvh w-full bg-[url("./Assets/bg.png")] bg-no-repeat bg-cover'>
//             {/* NAVBAR */}
//             <div id='navbar' className='py-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded sticky top-0 z-20 bg-opacity-80 scroll-mb-5 bg-clip-text-sm backdrop-blur'>
//                 <ul className='font-popin flex justify-evenly'>
//                     <li className='cursor-pointer hover:scale-125 duration-700'>WhatsApp</li>
//                     <li className='cursor-pointer hover:scale-125 duration-700'>YouTube</li>
//                     <li className='cursor-pointer hover:scale-125 duration-700'>Instagram</li>
//                     <li className='cursor-pointer hover:scale-125 duration-700'>Twitter</li>
//                     <li className='cursor-pointer hover:scale-125 duration-700'>About</li>
//                 </ul>
//             </div>

//             {/* MAIN */}
//             <div id='main' className='relative grid place-content-center h-screen'>
//                 <h1 className='font-popin text-white text-9xl absolute top-48 left-80'>UNIVERSAL COMMENT ANALYZER</h1>
//             </div>
//         </div>
//         </>
//     )
// }

// export default Home -->