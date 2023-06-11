import { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { MovieDetails, Movies } from "../../domain/Movie";
import MovieService from "../../application/themoviedb/MovieService";

export default function useMovieContext() {
	const { id } = useParams<{ id: string }>();
	const [searchParams] = useSearchParams();
	const query = searchParams.get("q") ?? "";
	const [featuredMovies, setFeaturedMovies] = useState<MovieDetails[]>([]);
	const [movieDetails, setMovieDetails] = useState<MovieDetails>();
	const [filteredMovies, setFilteredMovies] = useState<MovieDetails[]>([]);

	async function getMovies(): Promise<void> {
		try {
			const movieService = new MovieService();
			const data = await movieService.getMovies();
			setFeaturedMovies(data.results);
		} catch (error) {
			console.error(error);
		}
	}

	async function getMovieDetails(movieId: string): Promise<void> {
		try {
			const movieService = new MovieService();
			const data = await movieService.getMovieDetails(movieId);
			setMovieDetails(data);
		} catch (error) {
			console.error(error);
		}
	}

	async function getMovieSearch(query: string): Promise<void> {
		try {
			const movieService = new MovieService();
			const data: Movies = await movieService.getMovieSearch(query);
			setFilteredMovies(data.results);
		} catch (error) {
			console.error(error);
		}
	}

	return {
		//Props
		id,
		query,
		featuredMovies,
		movieDetails,
		filteredMovies,
		//Function
		getMovies,
		getMovieDetails,
		getMovieSearch,
	};
}
