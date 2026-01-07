
import React from 'react';
import { Bot, Zap, BarChart3, ShieldCheck } from 'lucide-react';

const features = [
  {
    title: 'AI Copilot',
    description: 'Your personal assistant for task prioritization.',
    icon: <Bot size={32} />,
    colSpan: 'md:col-span-2',
  },
  {
    title: 'Lightning Sync',
    description: '',
    icon: <Zap size={32} />,
    colSpan: 'md:col-span-1',
  },
  {
    title: 'Deep Analytics',
    description: '',
    icon: <BarChart3 size={32} />,
    colSpan: 'md:col-span-1',
  },
  {
    title: 'Global Security',
    description: '',
    icon: <ShieldCheck size={32} />,
    colSpan: 'md:col-span-2',
  },
];

const Features = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`group bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-violet-500/50 transition-colors ${feature.colSpan} cursor-pointer hover:bg-slate-900/40`}
            >
              <div className="text-violet-500 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-slate-50 mb-2">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
