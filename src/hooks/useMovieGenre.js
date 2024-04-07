
import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"

const fetchMovieGenre = () => {
    return api.get(`/genre/movie/list`)
}

export const useMovieGenreQuery = () => {
    return useQuery ({
        queryKey: ['movie-genre'],
        queryFn: fetchMovieGenre,
        select:(results) => results.data.genres, //[240405] genre 만 필요하니까
        staleTime: 300000, //[240405] genre 는 자주 안바뀌니까 자주 호출할 필요 없음. 캐쉬만 부르자. 5분!
    })
}