
import React from 'react';

const companies = ['ACME', 'STRATOS', 'NEXUS', 'ECHO', 'VORTEX'];

const SocialProof = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-sm uppercase text-slate-600 font-bold mb-8">
          Trusted by forward-thinking teams
        </h2>
        <div className="flex justify-center items-center space-x-12">
          {companies.map((company) => (
            <div
              key={company}
              className="text-slate-600 font-bold opacity-50 hover:opacity-100 transition-opacity"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
