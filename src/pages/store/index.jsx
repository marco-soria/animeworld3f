import React from 'react';
import { BannerStore } from './BannerStore';
import { StoreProducts } from './StoreProducts';

import { GiftCard } from './GiftCard';
import { StoreAnimation } from './StoreAnimation';



const StorePage = () => {
  return (
    <>
        
        <BannerStore />
        <StoreProducts />
        <GiftCard />
        <StoreAnimation />
    </>
  );
};

export default StorePage;