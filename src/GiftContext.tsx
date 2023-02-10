import React, { createContext, useState, useReducer } from 'react';

const initialState: {
  firstName: String;
  LastName: String;
  email: String;
  recFirstName: String;
  recLastName: String;
  recEmail: String;
  occasion: String;
  minPrice: Number;
  maxPrice: Number;
  giftMessage: String;
} = {
  firstName: '',
  LastName: '',
  email: '',
  recFirstName: '',
  recLastName: '',
  recEmail: '',
  occasion: '',
  minPrice: 0,
  maxPrice: 0,
  giftMessage: '',
};

interface IStateContext {
  giftProfile: {};
  setGiftProfile: React.Dispatch<any>;
}

export const GiftContext = createContext<IStateContext>({
  giftProfile: initialState,
  setGiftProfile: (state) => {
    console.log('state', state);
  },
});

export const GiftProvider = (props: any) => {
  const [giftProfile, setGiftProfile] = useState(initialState);
  return (
    <GiftContext.Provider value={{ giftProfile, setGiftProfile }}>
      {' '}
      {props.children}{' '}
    </GiftContext.Provider>
  );
};
