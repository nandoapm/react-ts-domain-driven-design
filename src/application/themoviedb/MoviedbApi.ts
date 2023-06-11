import { HttpMethod } from "../../domain/HttpMethod";
import BaseApi from "../../infrastructure/api/themoviedb/BaseApi";
import IMoviesDto from "../../domain/dto/MoviesDto";
import IMovieDetailsDto from "../../domain/dto/MovieDetailsDto";

interface IMoviedb {
	getMovies(): Promise<IMoviesDto>;
	getMovieSearch(query: IQuery): Promise<IMoviesDto>;
	getMovieDetails(movieId: string): Promise<IMovieDetailsDto>;
}

class Moviedb extends BaseApi implements IMoviedb {
	async getMovies(): Promise<IMoviesDto> {
		const resp = await this.request<IMoviesDto>(`movie/popular?language=pt-BR&top_rated`, HttpMethod.Get);

		return resp.data;
	}

	async getMovieSearch(query: IQuery): Promise<IMoviesDto> {
		const resp = await this.request<IMoviesDto>(`search/movie?query=${query}`, HttpMethod.Get);

		return resp.data;
	}

	async getMovieDetails(movieId: string): Promise<IMovieDetailsDto> {
		const resp = await this.request<IMovieDetailsDto>(`movie/${movieId}`, HttpMethod.Get);

		return resp.data;
	}
}

export const MoviedbApi: IMoviedb = new Moviedb("");
