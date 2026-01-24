import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type Address = {
  city: string;
  district: string;
};

export type PaymentMethod = {
  name: 'express' | 'visa' | 'mastercard' | 'paypal';
};

export type UserInfo = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  coupon?: string;
  address: Address;
};

export type PaymentState = {
  userInfo: UserInfo | null;
  paymentMethod: PaymentMethod | null;
};

const initialState: PaymentState = {
  userInfo: null,
  paymentMethod: null,
};

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    addUserInfo: (state, action: PayloadAction<PaymentState>) => {
      state.userInfo = action.payload.userInfo;
    },

    addPaymentMethod: (state, action: PayloadAction<PaymentState>) => {
      state.paymentMethod = action.payload.paymentMethod;
    },

    resetPayment: (state) => {
      state.userInfo = null;
      state.paymentMethod = null;
    },
  },
});

export const { addPaymentMethod, addUserInfo } = paymentSlice.actions;
export default paymentSlice.reducer;
