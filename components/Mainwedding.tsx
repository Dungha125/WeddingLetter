'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromBottomtime } from '@/util/motion';

const MainWedding = () => {
  // Variants for the SVG animations
  const flowerAnimation = {
    hidden: {
      x: 0,
    },
    visible: {
      x: '-100%',
      transition: {
        duration: 2,
        ease: 'easeInOut',
      },
    },
  };

  const flower2Animation = {
    hidden: {
      x: 0,
    },
    visible: {
      x: '100%',
      transition: {
        duration: 2,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="relative w-full min-h-screen overflow-hidden flex flex-col justify-center items-center gap-3 md:gap-6 px-6 lg:gap-8 bg-transparent"
    >
      {/* Covering SVGs */}
      <motion.div
        className="absolute top-0 left-0 w-1/2 h-full z-50 "
        variants={flowerAnimation}
        style={{
          backgroundImage: `url('/SVG/flower2.svg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></motion.div>
      <motion.div
        className="absolute top-0 right-0 w-1/2 h-full  z-50"
        variants={flower2Animation}
        style={{
          backgroundImage: `url('/SVG/flower.svg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></motion.div>

      {/* Main Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full flex flex-col items-center gap-3"
      >
        {/* Save The Date Title */}

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
          <span className="text-xl sm:text-3xl lg:text-4xl xl:text-5xl px-4 text-yellow-300 Fz-Strange-Dreams">
            Thứ 7
          </span>
          <div className="border-l-2 md:border-l-4 border-yellow-300 flex flex-col items-center sm:items-start">
            <span className="Fz-Strange-Dreams text-xl sm:text-3xl lg:text-4xl xl:text-5xl text-yellow-300 px-4">
              15.02
            </span>
            <span className="Fz-Strange-Dreams text-xl sm:text-3xl lg:text-4xl xl:text-5xl text-yellow-300 px-4">
              2025
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Background SVG */}
      <div className="absolute inset-0 -z-50">
        <img
          src="/SVG/backmobile0.svg"
          alt="Background"
          className="object-cover w-full h-full md:hidden"
        />
        <img
          src="/SVG/backmobile0.svg"
          alt="Background"
          className="object-cover w-full h-full hidden md:block"
        />
      </div>
    </motion.div>
  );
};

export default MainWedding;
