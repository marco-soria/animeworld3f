import React from 'react';

import { BannerAnime } from './BannerAnime';
import { RankingAnime } from './RankingAnime';
import { SearchAnime } from './SearchAnime';
import { CategoriesCarousel } from './CategoriesCarousel';

const AnimePage = () => {
  return (
    <>
        <BannerAnime />
        <SearchAnime />
        <RankingAnime />
        <CategoriesCarousel />
    </>
  );
};

export default AnimePage;
