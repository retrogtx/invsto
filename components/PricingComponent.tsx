'use client';

import { useEffect, useRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { setSliderValue, toggleBillingCycle } from '../store/pricingSlice';

const pageViewsOptions = [
  { views: '10K', price: 8 },
  { views: '50K', price: 12 },
  { views: '100K', price: 16 },
  { views: '500K', price: 24 },
  { views: '1M', price: 36 },
];

export default function PricingComponent() {
  const dispatch = useDispatch();
  const { sliderValue, isYearly } = useSelector((state: RootState) => state.pricing);

  const currentOption = pageViewsOptions[sliderValue];
  const price = isYearly ? currentOption.price * 0.75 : currentOption.price;

  const rangeRef = useRef<HTMLInputElement>(null);

  const updateSliderProgress = useCallback(() => {
    if (rangeRef.current) {
      const progress = (sliderValue / 4) * 100;
      rangeRef.current.style.setProperty('--range-progress', `${progress}%`);
    }
  }, [sliderValue]);

  useEffect(() => {
    updateSliderProgress();
  }, [updateSliderProgress]);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <p className="text-[#858FAD] uppercase font-bold tracking-wider text-xs md:text-sm mb-4 md:mb-0">
          {currentOption.views} Pageviews
        </p>
        <p className="text-3xl md:text-4xl font-extrabold text-[#293356] flex items-center">
          ${price.toFixed(2)} <span className="text-sm md:text-base font-medium text-[#858FAD] ml-2">/ month</span>
        </p>
      </div>
      
      <input
        ref={rangeRef}
        type="range"
        min="0"
        max="4"
        value={sliderValue}
        onChange={(e) => dispatch(setSliderValue(Number(e.target.value)))}
        className="w-full mb-8 appearance-none bg-transparent"
        style={{ '--range-progress': `${(sliderValue / 4) * 100}%` } as React.CSSProperties}
      />
      
      <div className="flex items-center justify-center md:justify-end mb-8 text-xs md:text-sm">
        <span className="text-[#858FAD] mr-2">Monthly Billing</span>
        <label className="switch mx-2">
          <input
            type="checkbox"
            checked={isYearly}
            onChange={() => dispatch(toggleBillingCycle())}
          />
          <span className="slider round"></span>
        </label>
        <span className="text-[#858FAD] mr-2">Yearly Billing</span>
        <span className="bg-[#FEECE7] text-[#FF8C66] font-bold px-2 py-1 rounded-full">
          -25%
        </span>
      </div>
      
      <hr className="mb-6 md:mb-8" />
      
      <div className="flex flex-col md:flex-row justify-between items-center">
        <ul className="text-[#858FAD] text-xs md:text-sm mb-6 md:mb-0">
          <li className="flex items-center mb-2">
            <svg className="w-3 h-3 md:w-4 md:h-4 mr-2 text-[#10D5C2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Unlimited websites
          </li>
          <li className="flex items-center mb-2">
            <svg className="w-3 h-3 md:w-4 md:h-4 mr-2 text-[#10D5C2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            100% data ownership
          </li>
          <li className="flex items-center">
            <svg className="w-3 h-3 md:w-4 md:h-4 mr-2 text-[#10D5C2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Email reports
          </li>
        </ul>
        <button className="bg-[#293356] text-white px-12 py-3 rounded-full hover:bg-[#293356]/90 transition-colors text-xs md:text-sm font-bold">
          Start my trial
        </button>
      </div>
    </div>
  );
}
