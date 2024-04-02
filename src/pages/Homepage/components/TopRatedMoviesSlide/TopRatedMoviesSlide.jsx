import React from 'react'
import { useTopRatedMoviesQuery } from "../../../../hooks/useTopRatedMovies";
import { Alert } from "bootstrap";
import { responsive } from "../../../../constants/responsive";
import MovieSlider from "../../../../common/MovieSlide/MovieSlider";

const TopRatedMoviesSlide = () => {
    const { data, isLoading, isError, error } = useTopRatedMoviesQuery(); // hook 만들어 놓으니 엄청 편함!
    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    if (isError) {
        return <Alert varient="danger">{error.message}</Alert>;
    }
    return (
        <div>
            <MovieSlider
                title='Top Rated Movies'
                movies={data.results}
                responsive={responsive}
            />
        </div>
    );
}

export default TopRatedMoviesSlide