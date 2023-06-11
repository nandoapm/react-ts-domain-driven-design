import { useEffect } from "react";
import { Container, Title } from "./styles";
import MovieCard from "../../components/MovieCard/MovieCard";
import useMovieContext from "../../provider/useMovieContext";

const Home = () => {
	const { featuredMovies, getMovies } = useMovieContext();

	useEffect(() => {
		getMovies();
	}, []);

	return (
		<Container>
			<Title className="title">Destaques</Title>
			<div className="movies-container">
				{featuredMovies.length > 0 &&
					featuredMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
			</div>
		</Container>
	);
};

export default Home;
