import React from 'react'
import { motion } from 'framer-motion';
import { slideInFromBottom, slideInFromBottomtime, slideInFromTop } from '@/util/motion';

const Album = () => {
  const images = [
    { src: "/img/anh.jpg", alt: "Ảnh 1", gridArea: "a" },
    { src: "/img/anh.jpg", alt: "Ảnh 2", gridArea: "b" },
    { src: "/img/anh.jpg", alt: "Ảnh 3", gridArea: "c" },
    { src: "/img/anh.jpg", alt: "Ảnh 4", gridArea: "d" },
    { src: "/img/anh.jpg", alt: "Ảnh 5", gridArea: "e" },
    { src: "/img/anh.jpg", alt: "Ảnh 6", gridArea: "f" },
    { src: "/img/anh.jpg", alt: "Ảnh 7", gridArea: "g" },
    { src: "/img/anh.jpg", alt: "Ảnh 8", gridArea: "h" },
    { src: "/img/anh.jpg", alt: "Ảnh 9", gridArea: "i" },
  ];
  return (
    <div className='relative h-full w-full flex flex-col items-center py-6  justify-center'>
        <motion.h2
          variants={slideInFromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className='Fz-Strange-Dreams text-3xl md:text-5xl text-yellow-300 mt-[2rem]'>ĐỊA ĐIỂM TỔ CHỨC</motion.h2>
        <div className='w-full h-full flex flex-col md:flex-row justify-center mt-4'>
          
          <motion.div
            variants={slideInFromBottom}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className='m-4 bg-pink-100 max-w-[450px] md:min-w-[450px] rounded-md flex flex-col justify-center items-center p-4 gap-3'>
            <span className='text-pink-700 font-semibold'>TIỆC CƯỚI NHÀ GÁI</span>
            <button className='px-6 py-2 text-white font-semibold rounded-md bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 hover:from-pink-600 hover:to-pink-800 focus:outline-none'>
                <a href="https://maps.app.goo.gl/5JpQX7JZTbzZE2o76">Xem bản đồ</a>
            </button>
          </motion.div>
          <motion.div 
            variants={slideInFromBottom}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className='m-4 bg-cyan-100 max-w-[450px] md:min-w-[450px] rounded-md  flex flex-col justify-center items-center p-4 gap-3'>
            <span className='text-cyan-700 font-semibold'>TIỆC CƯỚI NHÀ TRAI</span>
            <button className='px-6 py-2 text-white font-semibold rounded-md bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 hover:from-cyan-600 hover:to-cyan-800 focus:outline-none'>
                <a href="https://maps.app.goo.gl/vbD92VVSj1Guykkj6">Xem bản đồ</a>
            </button>
          </motion.div>
        </div>

        {/*Album*/}

        <motion.h2
        variants={slideInFromBottom}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="Fz-Strange-Dreams text-3xl md:text-5xl text-yellow-300 my-4"
      >
        ALBUM KỶ NIỆM
      </motion.h2>

      <div className="album-grid w-full h-screen p-4 gap-[4px] md:w-[70%] md:gap-[8px]">
      {images.map((image, index) => (
        <motion.div 
          variants={slideInFromBottomtime(0.5 + index*0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          key={index}
          className="album-item"
          style={{ gridArea: image.gridArea }}
        >
          <img src={image.src} alt={image.alt} className="album-image" />
        </motion.div >
      ))}
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
