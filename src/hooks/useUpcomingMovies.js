import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchUpcomingMovies = () => {
    return api.get(`/movie/upcoming`)
}

// 왜 hook 을 만드는가?
export const useUpcomingMoviesQuery = () => {
    return useQuery({
        queryKey: ['movie-upcoming'],
        queryFn: fetchUpcomingMovies,
        select: (result) => result.data, //★data 만 리턴하겠다
    })
}