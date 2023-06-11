import { BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill } from "react-icons/bs";
import useMovieDetailsService from "./MovieDetailsService";
import MovieCard from "../../components/MovieCard/MovieCard";

import "./MovieDetails.css";

const MovieDetails = () => {
	const { movieDetails } = useMovieDetailsService();

	const formatCurrency = (number: number) => {
		return number.toLocaleString("en-US", {
			style: "currency",
			currency: "USD",
		});
	};

	return (
		<div className="movie-page">
			{movieDetails && (
				<>
					<MovieCard movie={movieDetails} />
					<p className="tagline">{movieDetails.tagline}</p>
					<div className="info">
						<h3>
							<BsWallet2 /> Orçamento:
						</h3>
						<p>{formatCurrency(movieDetails.budget)}</p>
					</div>
					<div className="info">
						<h3>
							<BsGraphUp /> Receita:
						</h3>
						<p>{formatCurrency(movieDetails.revenue)}</p>
					</div>
					<div className="info">
						<h3>
							<BsHourglassSplit /> Duração:
						</h3>
						<p>{movieDetails.runtime} minutos</p>
					</div>
					<div className="info description">
						<h3>
							<BsFillFileEarmarkTextFill /> Descrição:
						</h3>
						<p>{movieDetails.overview}</p>
					</div>
				</>
			)}
		</div>
	);
};

export default MovieDetails;
