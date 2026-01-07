'use client';

import Link from 'next/link';
import { Button } from '../ui/Button';

export const Navbar = () => {
  return (
    <nav className='fixed top-0 w-full z-50 backdrop-blur-md bg-slate-950/70 border-b border-slate-800/50'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex-shrink-0'>
            <Link href='/' className='text-2xl font-bold text-white'>
              TaskMaster
            </Link>
          </div>
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-4'>
              <Link
                href='#features'
                className='text-slate-300 hover:bg-slate-800/50 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
              >
                Features
              </Link>
              <Link
                href='#solutions'
                className='text-slate-300 hover:bg-slate-800/50 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
              >
                Solutions
              </Link>
              <Link
                href='#pricing'
                className='text-slate-300 hover:bg-slate-800/50 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
              >
                Pricing
              </Link>
            </div>
          </div>
          <div className='flex items-center gap-x-4'>
            <Button variant='ghost' size='sm'>
              Sign In
            </Button>
            <Button variant='primary' size='sm'>
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
