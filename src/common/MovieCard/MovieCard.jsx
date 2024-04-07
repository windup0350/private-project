import React from "react";
import Badge from "react-bootstrap/Badge";
import './MovieCard.style.css'
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";

const MovieCard = ({ movie }) => {

  const { data: genreData } = useMovieGenreQuery(); //[240405] 이름을 재정의
  // console.log("genre", genreData);

  const showGenre = (genreIdList) => { //[240405] 로직 검토
    if (!genreData) return []; // 없으면 안보여주고...
    const genreNames = genreIdList.map((id) => {
      const genreObj = genreData.find((genre) => genre.id === id);
      return genreObj.name;
    });
    return genreNames;
  }

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
        {showGenre(movie.genre_ids).map((id) => ( //[240405] showGenre를 거쳐서 ids를 보여주자
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
