import React from 'react'

const Contact = () => {
  return (
    <>
    <div id='contact' className='bg-[url("https://i.pinimg.com/564x/78/4f/05/784f05041443a8a68202ae5eed0a43b3.jpg")] bg-[length:630px_800px] md:bg-[length:1550px_800px] bg-no-repeat bg-fixed text-white'>
      <div id='title2' className='sticky top-0 z-20 rounded-xl backdrop-blur-2xl hover:bg-[#08387B] duration-1000'>
        <h2 className='font-bree uppercase p-4 text-center text-5xl md:text-7xl'>contact us</h2>
      </div>

      <div className='grid place-content-center h-screen w-full font-averia px-4 text-center text-xl'>
        <form className='flex flex-col gap-5'>
          <label for='name' className='flex gap-14 justify-end items-center'>
            <span className="text-3xl font-bold">Name: </span>
            <input type="text" name="name" id='name' placeholder='Your Name' className="rounded-lg px-2 py-1 text-black"/>
          </label>
          
          <label for="email" className='flex gap-14 justify-end items-center'>
            <span className="text-3xl font-bold">Email: </span>
            <input type="text" name="email" id="email" cols="10" placeholder="you@gmail.com" className="rounded-lg px-2 py-1 text-black" />
          </label>

          <label for="Textarea" className='flex gap-14 justify-end items-center'>
            <span className="text-3xl font-bold">Message: </span>
            <textarea name="textarea" id="Textarea" rows="3" placeholder="Type Something.." className="rounded-lg px-2 py-1 text-black"></textarea>
          </label>

          <button className='mt-8'>
            <span className="text-2xl font-bold text-orange-700 rounded-lg border-2 border-orange-700 py-4 px-8 duration-300 hover:bg-orange-700 hover:text-white hover:border-white active:bg-orange-400 active:border-4"><input type="submit" value="SUBMIT"/></span>
          </button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Contact