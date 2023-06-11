import { useEffect } from "react";
import useMovieContext from "../../provider/useMovieContext";
import { BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill } from "react-icons/bs";
import MovieCard from "../../components/MovieCard/MovieCard";

import { ContainerDatail, Description, Info, TagLine } from "./styles";

const MovieDetails = () => {
	const { id, movieDetails, getMovieDetails } = useMovieContext();

	useEffect(() => {
		getMovieDetails(id ?? "");
	}, []);

	const formatCurrency = (number: number) => {
		return number.toLocaleString("en-US", {
			style: "currency",
			currency: "USD",
		});
	};

	return (
		<ContainerDatail>
			{movieDetails && (
				<>
					<MovieCard movie={movieDetails} />

					<TagLine>{movieDetails.tagline}</TagLine>

					<Info>
						<h3>
							<BsWallet2 />
						</h3>
						<p>Orçamento: {formatCurrency(movieDetails.budget)}</p>
					</Info>

					<Info>
						<h3>
							<BsGraphUp />
						</h3>
						<p>Receita: {formatCurrency(movieDetails.revenue)}</p>
					</Info>

					<Info>
						<h3>
							<BsHourglassSplit />
						</h3>
						<p>Duração: {movieDetails.runtime} minutos</p>
					</Info>

					<Description>
						<h3>
							<BsFillFileEarmarkTextFill /> Descrição
						</h3>
						<p>{movieDetails.overview}</p>
					</Description>
				</>
			)}
		</ContainerDatail>
	);
};

export default MovieDetails;
