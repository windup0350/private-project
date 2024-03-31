import React from "react";
import './PopularMovieSlide.style.css'
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import { Alert } from "bootstrap";
//URL：https://www.npmjs.com/package/react-multi-carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "../MovieCard/MovieCard";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

const PopularMovieSlide = () => {
    const { data, isLoading, isError, error } = usePopularMoviesQuery(); // hook 만들어 놓으니 엄청 편함!
    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    if (isError) {
        return <Alert varient="danger">{error.message}</Alert>;
    }
    return (
        <div>
            <h3>Popular Movies</h3>
            <Carousel
                infinite={true} // 무한반복
                centerMode={true} // 중앙배치
                itemClass="movie-slider p-1"
                containerClass="carousel-container"
                responsive={responsive} //★ 이 객체로 몇개의 아이템을 보여줄지 설정
            >
                {/*[240328-240330] 苦戦！*/}
                {data.results.map((movie, index) => (
                    <MovieCard movie={movie} key={index} />
                ))}
            </Carousel>
            ;
        </div>
    );
};

export default PopularMovieSlide;



