'use client';

import { useState } from 'react';

const pageViewsOptions = [
  { views: '10K', price: 8 },
  { views: '50K', price: 12 },
  { views: '100K', price: 16 },
  { views: '500K', price: 24 },
  { views: '1M', price: 36 },
];

export default function PricingComponent() {
  const [sliderValue, setSliderValue] = useState(2);
  const [isYearly, setIsYearly] = useState(false);

  const currentOption = pageViewsOptions[sliderValue];
  const price = isYearly ? currentOption.price * 0.75 : currentOption.price;

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="flex justify-between items-center mb-8">
        <p className="text-[#858FAD] uppercase font-bold tracking-wider">
          {currentOption.views} Pageviews
        </p>
        <p className="text-3xl font-bold text-[#293356]">
          ${price.toFixed(2)} <span className="text-base text-[#858FAD]">/ month</span>
        </p>
      </div>
      
      <input
        type="range"
        min="0"
        max="4"
        value={sliderValue}
        onChange={(e) => setSliderValue(Number(e.target.value))}
        className="w-full mb-8"
      />
      
      <div className="flex items-center justify-end mb-8">
        <span className="text-[#858FAD] mr-2">Monthly Billing</span>
        <label className="switch">
          <input
            type="checkbox"
            checked={isYearly}
            onChange={() => setIsYearly(!isYearly)}
          />
          <span className="slider round"></span>
        </label>
        <span className="text-[#858FAD] ml-2">Yearly Billing</span>
        <span className="ml-2 bg-[#FEECE7] text-[#FF8C66] text-xs font-bold px-2 py-1 rounded-full">
          25% discount
        </span>
      </div>
      
      <hr className="mb-8" />
      
      <div className="flex justify-between items-center">
        <ul className="text-[#858FAD]">
          <li className="flex items-center mb-2">
            <svg className="w-4 h-4 mr-2 text-[#10D5C2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Unlimited websites
          </li>
          <li className="flex items-center mb-2">
            <svg className="w-4 h-4 mr-2 text-[#10D5C2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            100% data ownership
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 mr-2 text-[#10D5C2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Email reports
          </li>
        </ul>
        <button className="bg-[#293356] text-white px-12 py-3 rounded-full hover:bg-[#293356]/90 transition-colors">
          Start my trial
        </button>
      </div>
    </div>
  );
}