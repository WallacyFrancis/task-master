
import React from 'react';
import { Button } from '../ui/Button';

export const CTASection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 p-12 text-center">
          <div className="absolute inset-0 -z-10">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
            Ready to streamline your workflow?
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
            Join 10,000+ teams who use TaskMaster to ship faster.
          </p>
          <Button
            size="lg"
            className="bg-white text-slate-950 hover:bg-slate-200"
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};
