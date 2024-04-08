import React, { useState } from "react";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import { useSearchParams } from "react-router-dom";
import { Alert } from "bootstrap";
import { Col, Container, Row } from "react-bootstrap";
import MovieCard from "../../common/MovieCard/MovieCard";
import Pagination from "../../common/Pagination/Pagination";
import "./MoviesSearchResultPage.style.css";

//【경로 2 Pattern】 //[240406]
// nav바를 클릭해서 입장 -> popularMovie 보여주기
// keyword를 입력해서 입장 -> keyword 와 관련한 영화들을 보여주기

// 페이지네이션 설치 //[240407]
// page state 만들기
// 페이지네이션 클릭시마다 page 바꿔주기
// page 값이 바뀔때마다 useSearchMovie에 page까지 넣어서 fetch
// 참고: https://npmjs.com/package/react-paginate
// 참고: https://codepen.io/monsieurv/pen/abyJQWQ

const MoviesSearchResultPage = () => {
  const [query] = useSearchParams(); //[ミス２] URL의 Query값을 불러와야 함.
  const [page, setPage] = useState(1);
  const keyword = query.get("q");

  const { data, isLoading, isError, error } = useSearchMovieQuery({
    keyword,
    page,
  }); //[ミス１] 매개변수 잊지 말자. 단...
  // console.log("data", data);

  const handleClickPage = ({ selected }) => {
    //[240407]
    setPage(selected + 1);
  };

  if (isLoading) {
    <h1>Loading...</h1>;
  }
  if (isError) {
    <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <Container className="result-container" >
          <Row>
            {data?.results.map((movie, index) => (
              <Col key={index} lg={3} xs={12}>
                <MovieCard movie={movie} key={index} />
              </Col>
            ))}
          </Row>
          <Pagination
            forcePage={page - 1}
            pageCount={data?.total_pages}
            onClickPage={handleClickPage}
          />
    </Container>
  );
};

export default MoviesSearchResultPage;
