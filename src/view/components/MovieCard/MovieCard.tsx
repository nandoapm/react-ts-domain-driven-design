import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { MovieDetails } from "../../../domain/Movie";
import { ContainerCard } from "./styles";

const imagesURL = import.meta.env.VITE_IMG;

type TMovieCardProps = {
	movie: MovieDetails;
	showLink: boolean;
};

const MovieCard: React.FC<TMovieCardProps> = ({ movie, showLink = true }) => {
	return (
		<ContainerCard>
			<img src={imagesURL + movie.poster_path} alt={movie.title} />
			<h2>{movie.title}</h2>
			<p>
				<FaStar /> {movie.vote_average}
			</p>
			{showLink && <Link to={`/movie/${movie.id}`}>Detalhe</Link>}
		</ContainerCard>
	);
};

export default MovieCard;
