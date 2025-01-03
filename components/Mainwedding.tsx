'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromBottomtime } from '@/util/motion';

const MainWedding = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="relative w-full min-h-screen overflow-y-hidden flex flex-col justify-center items-center gap-3 md:gap-6 px-6 lg:gap-8 bg-transparent"
    >
      {/* Save The Date Title */}
      <motion.div
        variants={slideInFromBottomtime(0.7)}
      >
        <img
          src="/SVG/back0.svg"
          alt="Background"
          className="object-cover w-full h-full hidden md:block"
        />
      </motion.div>


      <motion.span
        variants={slideInFromBottomtime(0.5)}
        className="Fz-Strange-Dreams text-center text-3xl sm:text-2xl lg:text-3xl xl:text-4xl text-white"
      >
        SAVE THE DATE
      </motion.span>

      {/* Couple's Names */}
      <motion.div
        variants={slideInFromBottomtime(0.6)}
        className="Peristiwa text-yellow-300 text-center text-3xl sm:text-4xl lg:text-5xl xl:text-6xl"
      >
        Hồng Ngọc & Dũng Hà
      </motion.div>

      {/* Image Section */}
      <motion.div
        variants={slideInFromBottomtime(0.7)}
        style={{
          backgroundImage: `url('/img/anh.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        className="w-[90%] sm:w-3/4 md:w-[400px] lg:w-[500px] xl:w-[600px] h-48 sm:h-64 md:h-72 lg:h-80 xl:h-[300px] rounded-xl"
      />

      {/* Date Section */}
      <motion.div
        variants={slideInFromBottomtime(0.8)}
        className="flex flex-row items-center text-center sm:text-left gap-2 sm:gap-3"
      >
        {/* Day */}
        <span className="text-xl sm:text-3xl lg:text-4xl xl:text-5xl px-4 text-yellow-300 Fz-Strange-Dreams">
          Thứ 7
        </span>

        {/* Divider and Date */}
        <div className="border-l-2 md:border-l-4 border-yellow-300 flex flex-col items-center sm:items-start">
          <span className="Fz-Strange-Dreams text-xl sm:text-3xl lg:text-4xl xl:text-5xl text-yellow-300 px-4">
            15.02
          </span>
          <span className="Fz-Strange-Dreams text-xl sm:text-3xl lg:text-4xl xl:text-5xl text-yellow-300 px-4">
            2025
          </span>
        </div>
      </motion.div>

      {/* Background SVG */}
      <div className="absolute inset-0 -z-50">
        {/* Background for Mobile */}
        <img
          src="/SVG/backmobile0.svg"
          alt="Background"
          className="object-cover w-full h-full md:hidden"
        />
        {/* Background for Larger Screens */}
        <img
          src="/SVG/back0.svg"
          alt="Background"
          className="object-cover w-full h-full hidden md:block"
        />
      </div>
    </motion.div>
  );
};

export default MainWedding;
