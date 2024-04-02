import React from 'react'
import { useUpcomingMoviesQuery } from "../../../../hooks/useUpcomingMovies";
import { Alert } from "bootstrap";
import { responsive } from "../../../../constants/responsive";
import MovieSlider from "../../../../common/MovieSlide/MovieSlider";

const UpcomingMoviesSlide = () => {
    const { data, isLoading, isError, error } = useUpcomingMoviesQuery();
    console.log("upcoming", data);
    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    if (isError) {
        return <Alert varient="danger">{error.message}</Alert>;
    }
    return (
        <div>
            <MovieSlider
                title='Upcoming Movies'
                movies={data.results}
                responsive={responsive}
            />
        </div>
    );
}

export default UpcomingMoviesSlide