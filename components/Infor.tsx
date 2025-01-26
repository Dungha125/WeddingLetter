import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight } from '@/util/motion';

const Infor = () => {
  return (
    <div className='h-full w-full bg-white flex flex-col items-center gap-4 py-6'>
      {/* Slide-in text */}
      <motion.div
        variants={slideInFromLeft(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className='w-full px-6 text-center merienda text-red-600 text-xs sm:text-sm md:text-lg lg:text-xl'>
        <h2>“A new command I give you: Love one another.
        <br />As I have loved you, so you must love one another”</h2>
      </motion.div>

      {/* Nhà gái */}
      <div className='w-full flex justify-center px-4 sm:px-6 gap-4 mt-6 md:mt-8'>
        {/* Phần hình ảnh */}
        <motion.div
          variants={slideInFromLeft(0.9)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          style={{
            backgroundImage: `url('/img/RENA3284.JPG')`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          className="w-[45%] sm:w-[50%] md:w-[45%] lg:w-[40%] h-48 sm:h-56 md:h-72 rounded-xl"
        />
        
        {/* Phần text */}
        <div className='w-[45%] sm:w-[50%] md:w-[45%] lg:w-[40%] flex flex-col items-center justify-around text-neutral-700 merienda'>
          <motion.span 
            variants={slideInFromRight(0.9)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className='flex flex-col items-center gap-2'>
            <h3 className="text-xs sm:text-sm md:text-xl font-bold Fz-Strange-Dreams">Nhà gái</h3>
            <p className="text-sm sm:text-base md:text-xl">Ông Trần Kim Tuyến</p>
            <p className="text-sm sm:text-base md:text-xl">Bà Phạm Thị Nhài</p>
          </motion.span>
          <motion.span 
            variants={slideInFromRight(1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className='flex flex-col items-center gap-2'>
            <h3 className="text-xs sm:text-sm md:text-xl font-bold Fz-Strange-Dreams">Cô dâu</h3>
            <h2 className="text-[20px] sm:text-[24px] md:text-[36px] Peristiwa mt-1 text-pink-600">Trần Duyên Hợp</h2>
          </motion.span>
        </div>
      </div>

      {/* Nhà trai */}
      <div className='w-full flex justify-center px-4 sm:px-6 gap-4 mt-6 md:mt-8'>
        {/* Phần text */}
        <div className='w-[45%] sm:w-[50%] md:w-[45%] lg:w-[40%] flex flex-col items-center justify-around text-neutral-700 merienda'>
          <motion.span
          variants={slideInFromLeft(0.9)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className='flex flex-col items-center gap-2'>
            <h3 className="text-xs sm:text-sm md:text-xl font-bold Fz-Strange-Dreams">Nhà trai</h3>
            <p className="text-sm sm:text-base md:text-xl">Ông Đỗ Xuân Mô</p>
            <p className="text-sm sm:text-base md:text-xl">Bà Đỗ Thị Bảy</p>
          </motion.span>
          <motion.span  
          variants={slideInFromLeft(1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className='flex flex-col items-center'>
            <h3 className="text-xs sm:text-sm md:text-xl font-bold Fz-Strange-Dreams">Chú rể</h3>
            <h2 className="text-[20px] sm:text-[24px] md:text-[36px] Peristiwa mt-1 text-cyan-600">Đỗ Chí Long</h2>
          </motion.span>
        </div>

        {/* Phần hình ảnh */}
        <motion.div
        variants={slideInFromRight(0.9)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
          style={{
            backgroundImage: `url('/img/RENA3678.JPG')`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          className="w-[45%] sm:w-[50%] md:w-[45%] lg:w-[40%] h-48 sm:h-56 md:h-72 rounded-xl"
        />
      </div>
      
    </div>
  );
};

export default Infor;
