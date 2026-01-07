'use client';

import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface Plan {
  name: string;
  price: {
    monthly: number | string;
    annually: number | string;
  };
  description: string;
  features: string[];
  isFeatured?: boolean;
}

const plans: Plan[] = [
  {
    name: 'Starter',
    price: {
      monthly: 0,
      annually: 0,
    },
    description: 'Get started with the basics.',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
  },
  {
    name: 'Pro',
    price: {
      monthly: 29,
      annually: 24,
    },
    description: 'For professionals and teams.',
    features: ['All Starter features', 'Feature 4', 'Feature 5'],
    isFeatured: true,
  },
  {
    name: 'Enterprise',
    price: {
      monthly: 'Custom',
      annually: 'Custom',
    },
    description: 'For large organizations.',
    features: ['All Pro features', 'Feature 6', 'Feature 7'],
  },
];

export const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-3 text-lg text-slate-400">
            Choose the plan that&apos;s right for you.
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="flex items-center space-x-4">
            <span className="text-white">Monthly</span>
            <label className="relative inline-flex cursor-pointer items-center">
              <input
                type="checkbox"
                className="peer sr-only"
                checked={isAnnual}
                onChange={() => setIsAnnual(!isAnnual)}
              />
              <div className="peer h-6 w-11 rounded-full bg-slate-700 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-slate-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-violet-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-violet-500/50"></div>
            </label>
            <span className="flex items-center text-white">
              Yearly
              <span className="ml-2 rounded-full bg-violet-600 px-2 py-1 text-xs text-white">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl bg-slate-900 p-8 ${
                plan.isFeatured
                  ? 'border-2 border-violet-500 shadow-lg shadow-violet-500/20'
                  : 'border border-slate-800'
              }`}
            >
              {plan.isFeatured && (
                <div className="absolute top-0 right-8 -translate-y-1/2">
                  <span className="rounded-full bg-violet-600 px-3 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
              <p className="mt-4 text-4xl font-bold text-white">
                {typeof plan.price.monthly === 'number' &&
                typeof plan.price.annually === 'number' ? (
                  <>
                    $
                    {isAnnual
                      ? plan.price.annually
                      : plan.price.monthly}
                    <span className="text-base font-normal text-slate-400">
                      / month
                    </span>
                  </>
                ) : (
                  'Custom'
                )}
              </p>
              <p className="mt-4 text-slate-400">{plan.description}</p>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-violet-500" />
                    <span className="ml-3 text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button
                  variant={
                    plan.isFeatured
                      ? 'primary'
                      : plan.name === 'Starter'
                      ? 'secondary'
                      : 'ghost'
                  }
                  className="w-full"
                >
                  {plan.name === 'Enterprise'
                    ? 'Contact Sales'
                    : 'Get Started'}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
