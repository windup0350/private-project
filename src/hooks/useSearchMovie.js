import { useQuery } from "@tanstack/react-query"
import api from "../utils/api";

const fetchSearchMovie = ({ keyword, page }) => {
    return keyword
        ? api.get(`/search/movie?query=${keyword}&page=${page}`) //주의: &
        : api.get(`/movie/popular?page=${page}`);
};  

export const useSearchMovieQuery = ({ keyword, page }) => { // [240406-240407]
    return useQuery({ 
        queryKey: ['movie-search', keyword, page], // {keyword, page}로 오브젝트 처리도 가능
        queryFn: () => fetchSearchMovie({ keyword, page }), // keyword도 같이 보냄
        select: (result) => result.data,
    });
};