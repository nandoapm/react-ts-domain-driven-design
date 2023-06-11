import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../MovieCard/MovieCard";

import "./Search.css";
import IMoviesDto from "../../../domain/dto/MoviesDto";
import IMovieDetailsDto from "../../../domain/dto/MovieDetailsDto";
import { MoviedbApi } from "../../../application/themoviedb/MoviedbApi";
import { Title } from "../../pages/Home/styles";

const Search = () => {
	const [searchParams] = useSearchParams();

	const [filteredMovies, setFilteredMovies] = useState<IMovieDetailsDto[]>();
	const query: IQuery = searchParams.get("q");

	useEffect(() => {
		getMovieSearch(query);
	}, [query]);

	const getMovieSearch = async (query: IQuery): Promise<void> => {
		try {
			const data: IMoviesDto = await MoviedbApi.getMovieSearch(query);
			setFilteredMovies(data.results);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="container">
			<Title className="title">
				Resultados para: <span>{query}</span>
			</Title>
			<div className="movies-container">
				{filteredMovies && filteredMovies?.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
			</div>
		</div>
	);
};

export default Search;
