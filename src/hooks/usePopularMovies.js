import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchPopularMovies = () => {
    return api.get(`/movie/popular`) // base url 은 지우고 end point 만 남기자
}

// 왜 hook 을 만드는가?
export const usePopularMoviesQuery = () => {
    return useQuery ({
        queryKey: ['movie-popular'],
        queryFn: fetchPopularMovies,
        select:(result)=>result.data, //★data 만 리턴하겠다
    })
}
