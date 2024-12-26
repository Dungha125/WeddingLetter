import React from 'react'

const Album = () => {
  return (
    <div className='relative h-full w-full flex flex-col items-center py-6  justify-center'>
        <h2 className='Fz-Strange-Dreams text-3xl md:text-5xl text-green-700'>ĐỊA ĐIỂM TỔ CHỨC</h2>
        <div className='w-full h-full flex flex-col md:flex-row justify-center mt-4'>
          
          <div className='m-4 bg-pink-100 max-w-[450px] md:min-w-[450px] rounded-md flex flex-col justify-center items-center p-4 gap-3'>
            <span className='text-pink-700 font-semibold'>TIỆC CƯỚI NHÀ GÁI</span>
            <button className='px-6 py-2 text-white font-semibold rounded-md bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 hover:from-pink-600 hover:to-pink-800 focus:outline-none'>
                <a href="https://maps.app.goo.gl/5JpQX7JZTbzZE2o76">Xem bản đồ</a>
            </button>
          </div>
          <div className='m-4 bg-cyan-100 max-w-[450px] md:min-w-[450px] rounded-md  flex flex-col justify-center items-center p-4 gap-3'>
            <span className='text-cyan-700 font-semibold'>TIỆC CƯỚI NHÀ TRAI</span>
            <button className='px-6 py-2 text-white font-semibold rounded-md bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 hover:from-cyan-600 hover:to-cyan-800 focus:outline-none'>
                <a href="https://maps.app.goo.gl/vbD92VVSj1Guykkj6">Xem bản đồ</a>
            </button>
          </div>
        </div>
      <div className="absolute inset-0 -z-50">
        {/* Background for Mobile */}
        <img
          src="/SVG/backmobile0.svg"
          alt="Background"
          className="object-cover w-full h-full md:hidden"
        />
        {/* Background for Larger Screens */}
        <img
          src="/SVG/back10.svg"
          alt="Background"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  )
}

export default Album
