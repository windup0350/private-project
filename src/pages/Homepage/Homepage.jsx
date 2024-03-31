import React from 'react';
import Banner from './components/Banner/Banner';
import PopularMovieSlide from './components/PopularMovieSlide/PopularMovieSlide';

// 1. Banner【✔：240324】
// 2. Popular Movie【✔：240330】
// 3. Top Rated Movie【・：】
// 4. Popular Movie【・：】

const Homepage = () => {
  return (
    <div>
      <Banner />
      <PopularMovieSlide/>
    </div>
  )
}

export default Homepage;

