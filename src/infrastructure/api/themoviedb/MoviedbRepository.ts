import BaseApi from "./BaseApi";
import { HttpMethod } from "../../../domain/HttpMethod";
import { Movies, MovieDetails } from "../../../domain/Movie";

interface IMoviedb {
	getMovies(): Promise<Movies>;
	getMovieSearch(query: string): Promise<Movies>;
	getMovieDetails(movieId: string): Promise<MovieDetails>;
}

class Moviedb extends BaseApi implements IMoviedb {
	async getMovies(): Promise<Movies> {
		const resp = await this.request<Movies>(`movie/popular?language=pt-BR&top_rated`, HttpMethod.Get);
		return resp.data;
	}

	async getMovieSearch(query: string): Promise<Movies> {
		const resp = await this.request<Movies>(`search/movie?query=${query}`, HttpMethod.Get);

		return resp.data;
	}

	async getMovieDetails(movieId: string): Promise<MovieDetails> {
		const resp = await this.request<MovieDetails>(`movie/${movieId}`, HttpMethod.Get);

		return resp.data;
	}
}

export const MoviedbRepository: IMoviedb = new Moviedb("");
