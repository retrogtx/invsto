import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PricingState {
  sliderValue: number;
  isYearly: boolean;
}

const initialState: PricingState = {
  sliderValue: 2,
  isYearly: false,
};

const pricingSlice = createSlice({
  name: 'pricing',
  initialState,
  reducers: {
    setSliderValue: (state, action: PayloadAction<number>) => {
      state.sliderValue = action.payload;
    },
    toggleBillingCycle: (state) => {
      state.isYearly = !state.isYearly;
    },
  },
});

export const { setSliderValue, toggleBillingCycle } = pricingSlice.actions;
export default pricingSlice.reducer;
