import { MovieDetails, Movies } from "../../domain/Movie";
import { MoviedbRepository } from "../../infrastructure/api/themoviedb/MoviedbRepository";

class MovieService {
	public async getMovies(): Promise<Movies> {
		try {
			const data: Movies = await MoviedbRepository.getMovies();
			return data;
		} catch (error) {
			console.error(error);
			throw error;
		}
	}

	public async getMovieDetails(movieId: string): Promise<MovieDetails> {
		try {
			const data: MovieDetails = await MoviedbRepository.getMovieDetails(movieId);
			return data;
		} catch (error) {
			console.error(error);
			throw error;
		}
	}

	public async getMovieSearch(query: string): Promise<Movies> {
		try {
			const data: Movies = await MoviedbRepository.getMovieSearch(query);
			return data;
		} catch (error) {
			console.error(error);
			throw error;
		}
	}
}

export default MovieService;
