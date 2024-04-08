import { useState } from "react";
import { Accordion, Dropdown } from "react-bootstrap";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import "./Filter.style.css";
import { useMovieGenreQuery } from "../../../hooks/useMovieGenre";

const Filter = ({
  popularity,
  genre,
  onChangePopularity,
  onChangeReleaseYear,
  onChangeGenre,
}) => {
  const { data: genreData } = useMovieGenreQuery();

  const [releaseYear, setReleaseYear] = useState([
    1990,
    new Date().getFullYear(),
  ]);

  const handleChangePopularity = (eventKey) => {
    onChangePopularity(eventKey);
  };

  const handleChangeReleaseYear = (value) => {
    console.log(value);
    setReleaseYear(value);
  };

  const handleRangeDragEnd = () => {
    onChangeReleaseYear(releaseYear);
  };

  const handleClickGenre = (id) => {
    onChangeGenre(id);
  };

  return (
    <Accordion className="filter">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Sort</Accordion.Header>
        <Accordion.Body>
          <p className="filter-title">Sort Results By</p>
          <p className="sort-label">Sort by</p>
          <Dropdown onSelect={handleChangePopularity}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              popularity({popularity})
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="desc">popularity(Desc)</Dropdown.Item>
              <Dropdown.Item eventKey="asc">popularity(ASC)</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Filter</Accordion.Header>
        <Accordion.Body>
          <p className="filter-title">YEAR Filter</p>
          <p className="releaseYear-value">
            From : <b>{releaseYear[0]}</b> - To : <b>{releaseYear[1]}</b>
          </p>
          <RangeSlider
            min={1990}
            max={new Date().getFullYear()}
            value={releaseYear}
            onInput={handleChangeReleaseYear}
            onThumbDragEnd={handleRangeDragEnd}
          />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Genres</Accordion.Header>
        <Accordion.Body>
          <ul className="genre-list">
            {genreData?.map(({ name, id }) => (
              <li
                key={id}
                className={`genre-item ${genre.includes(id) ? "selected" : ""}`}
              >
                <button onClick={() => handleClickGenre(id)}>{name}</button>
              </li>
            ))}
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Filter;
