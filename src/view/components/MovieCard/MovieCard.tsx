import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import IMovieDetailsDto from "../../../domain/dto/MovieDetailsDto";

const imagesURL = import.meta.env.VITE_IMG;

type TMovieCardProps = {
	movie: IMovieDetailsDto;
	showLink?: boolean;
};

const MovieCard: React.FC<TMovieCardProps> = ({ movie, showLink = true }) => {
	return (
		<div className="movie-card">
			<img src={imagesURL + movie.poster_path} alt={movie.title} />
			<h2>{movie.title}</h2>
			<p>
				<FaStar /> {movie.vote_average}
			</p>
			{showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
		</div>
	);
};

export default MovieCard;
