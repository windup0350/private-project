import './App.css';
import { Routes, Route } from 'react-router-dom'
import AppLayout from './layout/AppLayout';
import Homepage from './pages/Homepage/Homepage';
import MoviesPage from './pages/Movies/MoviesPage';
import MovieDetailPage from './pages/MovieDetail/MovieDetailPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import 'bootstrap/dist/css/bootstrap.min.css'; //[240315] 스타일 적용시 반드시 필요

// [홈페이지] /
// [영화 전체보여주는 페이지 (서치)] /movies
// [영화 디테일 페이지] /movies/:id
function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout/>}>
        <Route index element={<Homepage/>}/>
        <Route path="movies">
          <Route index element={<MoviesPage/>}/>
          <Route path=":id" element={<MovieDetailPage/>}/>
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
  );
}

export default App;
