import { useEffect, useState } from "react";
import { MoviedbApi } from "../../../application/themoviedb/MoviedbApi";
import IMovieDetailsDto from "../../../domain/dto/MovieDetailsDto";
import IMoviesDto from "../../../domain/dto/MoviesDto";

export default function useHomeService() {
	const [featuredMovies, setFeaturedMovies] = useState<IMovieDetailsDto[]>([]);

	useEffect(() => {
		getMovies();
	}, []);

	const getMovies = async (): Promise<void> => {
		try {
			const data: IMoviesDto = await MoviedbApi.getMovies();
			setFeaturedMovies(data.results);
		} catch (error) {
			console.error(error);
		}
	};

	return {
		featuredMovies,
	};
}
