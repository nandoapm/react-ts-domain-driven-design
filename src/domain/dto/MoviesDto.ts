import IMovieDetailsDto from "./MovieDetailsDto";

interface IMoviesDto {
	page: number;
	results: IMovieDetailsDto[];
	total_pages: number;
	total_results: number;
}

export default IMoviesDto;
