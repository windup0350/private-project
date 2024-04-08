import React, { useState } from "react";
import { Alert } from "bootstrap";
import { Col, Container, Row } from "react-bootstrap";
import MovieCard from "../../common/MovieCard/MovieCard";
import Filter from "./components/Filter";
import { useMovieListQuery } from "../../hooks/useMovieList";
import Pagination from "../../common/Pagination/Pagination";

const MoviesPage = () => {
  const [page, setPage] = useState(1);
  const [genre, setGenre] = useState([]);
  const [popularity, setPopularity] = useState("desc");
  const [releaseYear, setReleaseYear] = useState([
    1990,
    new Date().getFullYear() + 1,
  ]);

  const { data, isLoading, isError, error } = useMovieListQuery({
    page,
    popularity,
    releaseYear,
    genre,
  });

  const handleClickPage = ({ selected }) => {
    setPage(selected + 1);
  };
  const handleChangePopularity = (value) => {
    setPopularity(value);
  };

  const handleChangeReleaseYear = (year) => {
    setReleaseYear([year[0], year[1] + 1]);
  };

  const handleChangeGenre = (genreId) => {
    const newList = [...genre];
    if (genre.includes(genreId)) {
      setGenre(newList.filter((e) => e !== genreId));
    } else {
      setGenre(newList.concat(genreId));
    }
  };

  return (
    <Container>
      <Row>
        <Col lg={4} xs={12}>
          <Filter
            genre={genre}
            popularity={popularity}
            onChangePopularity={handleChangePopularity}
            onChangeReleaseYear={handleChangeReleaseYear}
            onChangeGenre={handleChangeGenre}
          />
        </Col>
        <Col lg={8} xs={12}>
          {isLoading ? (
            <h1>Loading...</h1>
          ) : isError ? (
            <Alert variant="danger">{error.message}</Alert>
          ) : (
            <>
              <Row>
                {data?.results?.map((movie, index) => (
                  <Col key={index} lg={4} xs={12}>
                    <MovieCard movie={movie} key={index} />
                  </Col>
                ))}
              </Row>

              <Pagination
                forcePage={page - 1}
                pageCount={data?.total_pages}
                onClickPage={handleClickPage}
              />
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default MoviesPage;
