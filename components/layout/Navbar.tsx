'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '../ui/Button';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className='fixed top-0 w-full z-50 backdrop-blur-md bg-slate-950/70 border-b border-slate-800/50'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex-shrink-0'>
            <Link href='/' className='text-2xl font-bold text-white'>
              TaskMaster
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className='hidden md:flex items-center space-x-4'>
            <Link href='#features' className='text-slate-300 hover:bg-slate-800/50 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
              Features
            </Link>
            <Link href='#pricing' className='text-slate-300 hover:bg-slate-800/50 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
              Pricing
            </Link>
            <Link href='#' className='text-slate-300 hover:bg-slate-800/50 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
              Integrations
            </Link>
          </div>

          <div className='hidden md:flex items-center gap-x-4'>
            <Button variant='ghost' size='sm'>
              Sign In
            </Button>
            <Button variant='primary' size='sm'>
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden'>
            <button onClick={toggleMobileMenu} className='inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className='md:hidden bg-slate-950/95 border-b border-slate-800'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            <Link href='#features' className='text-slate-300 hover:bg-slate-800/50 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
              Features
            </Link>
            <Link href='#pricing' className='text-slate-300 hover:bg-slate-800/50 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
              Pricing
            </Link>
            <Link href='#' className='text-slate-300 hover:bg-slate-800/50 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
              Integrations
            </Link>
          </div>
          <div className='pt-4 pb-3 border-t border-slate-800'>
            <div className="flex flex-col px-5 gap-y-2">
              <Button variant='ghost' size='sm'>Sign In</Button>
              <Button variant='primary' size='sm'>Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
