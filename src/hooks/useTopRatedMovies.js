import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchTopRatedMovies = () => {
    return api.get(`/movie/top_rated`)
}

// 왜 hook 을 만드는가?
export const useTopRatedMoviesQuery = () => {
    return useQuery({
        queryKey: ['movie-top-rated'],
        queryFn: fetchTopRatedMovies,
        select: (result) => result.data, //★data 만 리턴하겠다
    })
}
