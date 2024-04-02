import React from 'react';
import Banner from './components/Banner/Banner';
import PopularMovieSlide from './components/PopularMovieSlide/PopularMovieSlide';
import TopRatedMoviesSlide from './components/TopRatedMoviesSlide/TopRatedMoviesSlide';
import UpcomingMoviesSlide from './components/UpcomingMoviesSlide/UpcomingMoviesSlide';

// 1. Banner【✔：240324】
// 2. Popular Movie【✔：240330】
// 3. Top Rated Movie【・：】
// 4. Popular Movie【・：】

const Homepage = () => {
  return (
    <div className='slide-layout'>
      <Banner />
      <PopularMovieSlide /> 
      <TopRatedMoviesSlide /> 
      <UpcomingMoviesSlide /> 
    </div>
  )
}

export default Homepage;

