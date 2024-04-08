import { useQuery } from "@tanstack/react-query"
import api from "../utils/api";

const fetchSearchMovie = ({ page, popularity, releaseYear, genre }) => {
    return api.get(`/discover/movie?page=${page}&sort_by=popularity.${popularity}&primary_release_date.gte=${releaseYear[0]}-01-01&primary_release_date.lte=${releaseYear[1]}-01-01&with_genres=${genre.join()}`);
};

export const useMovieListQuery = ({ page, popularity, releaseYear, genre }) => {
    return useQuery({
        queryKey: ['movie-search', page, popularity, releaseYear, genre],
        queryFn: () => fetchSearchMovie({ page, popularity, releaseYear, genre }),
        select: (result) => result.data,
    });
};