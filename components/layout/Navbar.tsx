'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '../ui/Button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#solutions', label: 'Solutions' },
    { href: '#pricing', label: 'Pricing' },
  ];

  return (
    <nav className='fixed top-0 w-full z-50 backdrop-blur-lg bg-slate-950/70 border-b border-slate-800/50'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex-shrink-0'>
            <Link href='/' className='text-2xl font-bold text-white'>
              TaskMaster
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className='hidden md:flex items-center space-x-4'>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className='text-slate-300 hover:bg-slate-800/50 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors'
              >
                {link.label}
              </Link>
            ))}
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
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              <AnimatePresence mode='wait'>
                <motion.div
                  key={isOpen ? 'x' : 'menu'}
                  initial={{ rotate: isOpen ? 90 : 0, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: isOpen ? 0 : -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className='md:hidden fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl'
          >
            <div className='h-full flex flex-col items-center justify-center'>
              <div className='px-2 pt-2 pb-3 space-y-4 text-center'>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className='text-slate-300 hover:text-white block px-3 py-2 rounded-md text-2xl font-medium'
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className='pt-6 pb-3 mt-6 border-t border-slate-800 w-full'>
                <div className="flex flex-col items-center px-5 gap-y-4">
                  <Button variant='ghost' size='lg' fullWidth>
                    Sign In
                  </Button>
                  <Button variant='primary' size='lg' fullWidth>
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
