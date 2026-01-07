'use client';

import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const HeroSection = () => {
  return (
    <section className='relative overflow-hidden bg-slate-950 pt-32 pb-20 lg:pt-48 lg:pb-28'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8'>
          {/* Left Column (Content) */}
          <motion.div
            className='flex flex-col items-center text-center lg:items-start lg:text-left'
            variants={containerVariants}
            initial='hidden'
            animate='visible'
          >
            <motion.div
              variants={itemVariants}
              className='mb-4 inline-block rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-400'
            >
              New v2.0 is here!
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className='text-4xl font-extrabold tracking-tighter text-white sm:text-5xl lg:text-6xl'
            >
              Manage tasks at the <br /> speed of AI
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className='mt-4 max-w-xl text-lg text-slate-400'
            >
              The only workspace that learns from your habits, automates your
              todos, and helps you achieve peak productivity.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className='mt-8 flex flex-wrap justify-center gap-4 lg:justify-start'
            >
              <Button size='lg' variant='primary' className='cursor-pointer'>
                Get Started Free
              </Button>
              <Button size='lg' variant='outline' className='cursor-pointer'>
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column (Visual) */}
          <div className='relative flex items-center justify-center'>
            <div className='absolute -top-10 -right-10 h-64 w-64 bg-violet-600/30 rounded-full blur-3xl' />
            <div className='absolute -bottom-10 -left-10 h-64 w-64 bg-fuchsia-600/30 rounded-full blur-3xl' />

            <div className='relative w-full max-w-md'>
              <div className='aspect-[4/3] rounded-xl border border-slate-800 bg-slate-900/80 p-4 shadow-2xl shadow-violet-500/10 backdrop-blur-sm'>
                <div className='h-full w-full rounded-lg bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
