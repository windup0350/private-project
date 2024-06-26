import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import { Alert } from "bootstrap";
import { responsive } from "../../../../constants/responsive";
import MovieSlider from "../../../../common/MovieSlide/MovieSlider";

// [240401] common フォルダーに移動
// const responsive = {...};

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
            {/* [240401] 元のコードは common に移動 */}
            <MovieSlider
                title='Popular Movies'
                movies={data.results}
                responsive={responsive}
            />
        </div>
    );
};

export default PopularMovieSlide;



