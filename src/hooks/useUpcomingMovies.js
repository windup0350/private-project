import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchUpcomingMovies = () => {
    const today = new Date()
    return api.get(`/discover/movie?primary_release_date.gte=${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`)
}

// 왜 hook 을 만드는가?
export const useUpcomingMoviesQuery = () => {
    return useQuery({
        queryKey: ['movie-upcoming'],
        queryFn: fetchUpcomingMovies,
        select: (result) => result.data, //★data 만 리턴하겠다
    })
}