import React from "react";
import Badge from "react-bootstrap/Badge";
import './MovieCard.style.css'


const MovieCard = ({ movie }) => {
  return (
    <div
      style={{
        backgroundImage:
          "url(" +
          `https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}` +
          ")",
      }}
      className="card-layout"
    >
      <div className="card-info-overlay">
        <h2>{movie.title}</h2>
        {movie.genre_ids.map((id) => (
          <Badge bg="danger" className="badge-layout">{id}</Badge>
        ))}
        <div>
          <div>言語：{movie.original_language}</div>
          <div>人気度：{movie.popularity}</div>
          <div>公開日：{movie.release_date}</div>
          <div>閲覧対象：{movie.adult ? "成人向け" : "全年齢向け"}</div> {/* 追加対応 */}
        </div>
      </div>
    </div>
  );
};
export default MovieCard;



