import React from "react";
import { useParams } from "react-router-dom";
import "./MovieDetailPage.style.css";
import { useMovieDetail } from "../../hooks/useMovieDetail";

const MovieDetailPage = () => {
  const params = useParams();

  const { data: movie, isLoading } = useMovieDetail({
    movieId: params.id,
  });

  return (
    <div className="detail-container">
      <div
        style={{
          backgroundImage:
            "url(" +
            `https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movie?.poster_path}` +
            ")",
        }}
        className="poster"
      ></div>
      <div className="right">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <ul className="genre-list">
              {movie?.genres?.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
            <p className="title">{movie?.title}</p>
            <p className="overview">{movie?.overview}</p>
            <ul className="info-list">
              <li>
                <span className="label">Popularity</span>
                {movie?.popularity.toLocaleString()}
              </li>
              <li>
                <span className="label">Budget</span>${" "}
                {movie?.budget.toLocaleString()}
              </li>
              <li>
                <span className="label">Release Day</span>
                {movie?.release_date}
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default MovieDetailPage;
