import { useEffect } from "react";
import MovieCard from "../MovieCard/MovieCard";
import { Title } from "../../pages/Home/styles";

import "./Search.css";
import useMovieContext from "../../provider/useMovieContext";

const Search = () => {
	const { query, filteredMovies, getMovieSearch } = useMovieContext();

	useEffect(() => {
		getMovieSearch(query);
	}, []);

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
