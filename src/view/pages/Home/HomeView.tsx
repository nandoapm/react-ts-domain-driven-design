import { Container, Title } from "./styles";
import useHomeService from "./HomeService";
import MovieCard from "../../components/MovieCard/MovieCard";

const Home = () => {
	const { featuredMovies } = useHomeService();

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
