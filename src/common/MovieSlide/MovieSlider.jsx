import React from 'react'
import "./MovieSlider.style.css"
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import MovieCard from '../MovieCard/MovieCard';

const MovieSlider = ({ title, movies, responsive }) => { //[240401] popular movie → Props 로 받아오자
    return (
        <div>
            <h3>{title}</h3>
            <Carousel
                infinite={true} // 무한반복
                centerMode={true} // 중앙배치
                itemClass="movie-slider p-1"
                containerClass="carousel-container"
                responsive={responsive} //★ 이 객체로 몇개의 아이템을 보여줄지 설정
            >
                {/*[240328-240330] 苦戦！*/}
                {movies.map((movie, index) => (
                    <MovieCard movie={movie} key={index} />
                ))}
            </Carousel>
        </div>
    );
};

export default MovieSlider;